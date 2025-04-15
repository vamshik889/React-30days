// React.memo() - Full Usage Summary

import React from 'react';

// ✅ A memoized functional component
const Child = React.memo((props) => {
  console.log("Rendered Child Component");
  return <div>{props.name}</div>;
});

export default Child;

/*
==========================
🧠 React.memo() - 5 Key Points
==========================

1. ✅ What it does: Component Memoization
   - React.memo() is a higher-order component.
   - It memoizes the rendered output of a functional component.
   - Re-renders only if props change.

   Syntax:
   export default React.memo(MyComponent);

2. 🔍 Shallow Comparison of Props
   - Default behavior is shallow comparison (===).
   - Re-renders if any primitive prop changes.
   - Re-renders if reference of object/array changes, even if values are same.

3. ⚙️ Custom Comparison Function
   - Optional second argument: (prevProps, nextProps) => boolean
   - Return true to skip render, false to allow render.

   Example:
   export default React.memo(MyComponent, (prevProps, nextProps) => {
     return prevProps.id === nextProps.id;
   });

4. ⚠️ Only for Pure Functional Components
   - Works only with functional components.
   - Doesn’t memoize internal state, context, or hooks —  only props.
   - Class components can't use React.memo().

5. 🚀 When to Use
   - Great for performance optimization.
   - Useful when:
     - Component re-renders with same props frequently.
     - Component is pure and heavy to render.
     - You want to avoid unnecessary renders in large lists or UI trees.

   ⚠️ Avoid overuse — unnecessary memoization adds comparison overhead and complexity.

*/
