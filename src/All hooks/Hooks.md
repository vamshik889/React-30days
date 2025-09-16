
1. useState
Theory
useState is the most fundamental hook for managing component state. It allows functional components to have local state that persists between re-renders.


import React, { useState } from 'react';

const Counter = () => {
  // Basic usage
  const [count, setCount] = useState(0);
  
  // Function initializer (for expensive computations)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { name: '', email: '' };
  });
  
  // Object state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const increment = () => {
    setCount(prevCount => prevCount + 1); // Functional update
  };

  const updateFormField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      
      <input
        value={formData.username}
        onChange={(e) => updateFormField('username', e.target.value)}
        placeholder="Username"
      />
    </div>
  );
};
Production Tips
Use functional updates when new state depends on previous state

Split complex state into multiple useState calls

Use lazy initialization for expensive computations

2. useEffect
Theory
useEffect handles side effects in functional components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

jsx
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect with cleanup (componentWillUnmount equivalent)
  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`, {
          signal: abortController.signal
        });
        
        if (!response.ok) throw new Error('Failed to fetch user');
        
        const userData = await response.json();
        if (isMounted) {
          setUser(userData);
          setError(null);
        }
      } catch (err) {
        if (isMounted && err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [userId]); // Dependency array - effect runs when userId changes

  // Effect without dependencies (runs only once)
  useEffect(() => {
    console.log('Component mounted');
    
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Effect that runs on every render
  useEffect(() => {
    document.title = user ? `${user.name}'s Profile` : 'Loading...';
  }); // No dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
Production Tips
Always include cleanup for subscriptions, timers, and abortable requests

Use the dependency array correctly to avoid infinite loops

Consider using custom hooks for complex effects

3. useContext
Theory
useContext provides a way to pass data through the component tree without having to pass props down manually at every level.

jsx
import React, { useContext, createContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const userData = await response.json();
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier consumption
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Consumer component
const UserProfile = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
};
Production Tips
Create custom hooks for context consumption

Combine useContext with useReducer for complex state management

Use multiple contexts to avoid prop drilling

4. useReducer
Theory
useReducer is an alternative to useState for managing complex state logic. It's inspired by Redux and is perfect for state that involves multiple sub-values or when the next state depends on the previous one.

jsx
import React, { useReducer, useEffect } from 'react';

// Action types
const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  RESET: 'RESET'
};

// Reducer function
const apiReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ACTION_TYPES.RESET:
      return {
        data: null,
        loading: false,
        error: null
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Initial state
const initialState = {
  data: null,
  loading: false,
  error: null
};

// Custom hook using useReducer
const useApi = (url) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: error.message });
    }
  };

  const reset = () => {
    dispatch({ type: ACTION_TYPES.RESET });
  };

  return {
    ...state,
    fetchData,
    reset
  };
};

// Component using the custom hook
const DataFetcher = ({ apiUrl }) => {
  const { data, loading, error, fetchData, reset } = useApi(apiUrl);

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={fetchData}>Refetch</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
Production Tips
Use for complex state logic with multiple sub-values

Combine with useContext for global state management

Create reusable reducer functions

5. useCallback
Theory
useCallback returns a memoized callback function. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

jsx
import React, { useState, useCallback, memo } from 'react';

// Memoized child component
const ExpensiveChild = memo(({ onClick, data }) => {
  console.log('Child rendered');
  return (
    <button onClick={onClick}>
      Click me ({data.count})
    </button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Without useCallback - this function would be recreated on every render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Empty dependency array - function never changes

  // With dependencies
  const logCount = useCallback(() => {
    console.log(`Current count: ${count}`);
  }, [count]); // Recreated when count changes

  // Complex callback with multiple dependencies
  const complexOperation = useCallback(async (multiplier) => {
    const result = count * multiplier;
    // Some async operation
    return await someApiCall(result);
  }, [count]); // Recreated when count changes

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Count: {count}</p>
      
      {/* Child won't re-render unnecessarily thanks to useCallback */}
      <ExpensiveChild
        onClick={increment}
        data={{ count }}
      />
      
      <button onClick={logCount}>Log Count</button>
    </div>
  );
};
Production Tips
Use with memoized components to prevent unnecessary re-renders

Include all dependencies in the dependency array

Don't overuse - only when performance issues are identified

6. useMemo
Theory
useMemo returns a memoized value. It's useful for expensive calculations that you don't want to re-run on every render.

jsx
import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Expensive calculation - only re-runs when number changes
  const expensiveResult = useMemo(() => {
    console.log('Calculating expensive result...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  // Memoized object - prevents unnecessary re-renders in child components
  const themeStyles = useMemo(() => ({
    backgroundColor: darkTheme ? '#333' : '#FFF',
    color: darkTheme ? '#FFF' : '#333',
    padding: '2rem',
    margin: '2rem 0'
  }), [darkTheme]);

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDarkTheme(prev => !prev)}>
        Toggle Theme
      </button>
      <div>Expensive Result: {expensiveResult}</div>
    </div>
  );
};

// Real-world example: Data filtering and sorting
const UserList = ({ users, searchTerm, sortBy }) => {
  const filteredAndSortedUsers = useMemo(() => {
    console.log('Filtering and sorting users...');
    
    return users
      .filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'email') return a.email.localeCompare(b.email);
        return 0;
      });
  }, [users, searchTerm, sortBy]);

  return (
    <div>
      {filteredAndSortedUsers.map(user => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
};
Production Tips
Use for expensive calculations or complex data transformations

Memoize objects and arrays passed as props to prevent unnecessary re-renders

Don't use for simple calculations - overhead might outweigh benefits

7. useRef
Theory
useRef returns a mutable ref object whose .current property is initialized to the passed argument. It's useful for accessing DOM elements and storing mutable values that don't cause re-renders.

jsx
import React, { useRef, useEffect, useState } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const renderCount = useRef(0); // Doesn't cause re-render when updated

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
    
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  }, []);

  const handleClick = () => {
    inputRef.current?.focus();
    console.log('Button ref:', buttonRef.current);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me" />
      <button ref={buttonRef} onClick={handleClick}>
        Focus Input
      </button>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
};

// Real-world example: Previous value tracking
const CounterWithPrevious = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]); // Update ref after render

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current: {count}, Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

// Example: Interval management
const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
Production Tips
Use for accessing DOM elements when needed

Store mutable values that shouldn't trigger re-renders

Always check if ref.current exists before using it

8. Custom Hooks
Theory
Custom hooks allow you to extract component logic into reusable functions. They can use other hooks and maintain their own state.

jsx
import { useState, useEffect, useCallback } from 'react';

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== JSON.stringify(storedValue)) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, storedValue]);

  return [storedValue, setValue];
};

// Custom hook for API calls with retry logic
const useApiWithRetry = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const result = await response.json();
      setData(result);
      setRetryCount(0);
    } catch (err) {
      setError(err.message);
      
      // Auto-retry logic
      if (retryCount < 3) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchData();
        }, 1000 * Math.pow(2, retryCount)); // Exponential backoff
      }
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options), retryCount]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = () => {
    setRetryCount(0);
    fetchData();
  };

  return { data, loading, error, retry };
};

// Usage of custom hooks
const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { data: user, loading, error, retry } = useApiWithRetry('/api/user');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} <button onClick={retry}>Retry</button></div>;

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      {user && <div>Welcome, {user.name}</div>}
    </div>
  );
};
Production Tips
Start with use prefix for custom hook names

Return values in arrays or objects based on use case

Document hook dependencies and return values clearly

Test custom hooks thoroughly

These hooks form the foundation of modern React development. Mastering them will significantly improve your React applications' performance, maintainability, and developer experience.


