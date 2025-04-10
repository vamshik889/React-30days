import React, { useState } from 'react'
import Modal from './Modal'

const Page = () => {

    const [showModal,setShowModal] = useState(false);
    const closeModal = ()=>setShowModal(false);
  return (
    <div>
        <button onClick={()=>setShowModal(true)}>Open Modal</button>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae distinctio aspernatur voluptatem labore ex harum sequi iste dolorem, qui quisquam. Sed in nobis dignissimos unde reprehenderit repellat optio quis ut!
        Nobis quibusdam maiores magnam, doloremque modi soluta ad recusandae. Hic quo doloremque nulla inventore at sed sint veniam, illum non praesentium, ipsa, placeat ullam! Temporibus voluptates beatae libero magnam ullam!
        Quibusdam obcaecati laboriosam eveniet quo autem illum suscipit, libero ratione voluptatum aliquam? Distinctio nostrum alias architecto officiis natus quam eveniet, mollitia aliquam amet sequi ducimus culpa harum suscipit corporis. Itaque!
        Fugit quo, amet repellendus soluta odit exercitationem similique aperiam recusandae non quibusdam hic quaerat iste eveniet eius possimus cupiditate eaque, dolorem ipsam deleniti ipsa ab? Numquam temporibus reprehenderit voluptatibus delectus?
        Blanditiis iusto, amet asperiores inventore cumque recusandae vero vel at, delectus totam aspernatur voluptate unde ratione explicabo doloremque ipsa corporis tempore aperiam id dignissimos dicta expedita nemo! Aperiam, pariatur consectetur?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nostrum saepe nihil sint fugit dolor dignissimos molestiae. Natus mollitia similique aliquam inventore vel. Ea consequatur qui eum voluptate voluptatum eos?
        </p>
        <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas nostrum culpa debitis voluptate, sunt harum adipisci odit, quod assumenda laboriosam blanditiis unde temporibus excepturi, alias et maiores eligendi vel?
            A placeat, animi, veniam adipisci aliquid exercitationem reiciendis consectetur voluptatem nisi mollitia dolor alias nemo accusantium laudantium doloremque! Maxime illum amet minima temporibus corrupti architecto incidunt id consequatur asperiores ullam.
            Dicta, natus sint fuga commodi totam, quo id ullam animi vero distinctio necessitatibus! Recusandae sapiente, ratione dicta blanditiis eveniet sint sed facere, laudantium atque praesentium suscipit ducimus, laborum cupiditate expedita?
            Aspernatur a veniam itaque harum fugiat ea nulla earum maxime nesciunt quidem repellat, culpa ipsa veritatis laudantium amet, possimus in numquam praesentium rerum! Ea maiores laborum deserunt, labore eius rem?
            At eos hic ullam deleniti, impedit assumenda amet non ipsa reiciendis deserunt incidunt rerum facilis ut quisquam atque aspernatur dolorum, omnis quod porro perspiciatis eius aliquid quas voluptas. Similique, iure.
            Accusamus nostrum nisi iure commodi voluptatibus facere ab culpa id fugit aliquam cumque, officiis reprehenderit aut ullam soluta illo repudiandae? Quae ex quisquam fuga maiores placeat? Laudantium consequuntur beatae exercitationem?
            Quia qui quis natus sapiente, fugit labore obcaecati in. Autem beatae atque, libero amet adipisci, facere possimus quisquam tempora cumque, explicabo eaque nostrum debitis eum necessitatibus vel iusto repudiandae rem.
            Reiciendis maiores laborum mollitia illum at commodi! Neque sit velit laboriosam, ullam a, molestias obcaecati necessitatibus ducimus reprehenderit in blanditiis illum officiis consectetur voluptates tempore! Perspiciatis officia expedita cum numquam.
            Perspiciatis culpa ipsa dicta, repudiandae quia modi tempora dolorem neque officia, maiores ipsam similique quaerat esse perferendis provident exercitationem. Explicabo porro maxime in excepturi fugiat illum vel assumenda, ex omnis.
            Sequi quasi quibusdam suscipit ratione molestias unde labore eligendi quisquam laudantium? Mollitia ab, eos non dignissimos nulla unde debitis esse neque harum, fuga illo repellat! Sint consectetur veritatis unde alias!
        </section>
        <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas nostrum culpa debitis voluptate, sunt harum adipisci odit, quod assumenda laboriosam blanditiis unde temporibus excepturi, alias et maiores eligendi vel?
            A placeat, animi, veniam adipisci aliquid exercitationem reiciendis consectetur voluptatem nisi mollitia dolor alias nemo accusantium laudantium doloremque! Maxime illum amet minima temporibus corrupti architecto incidunt id consequatur asperiores ullam.
            Dicta, natus sint fuga commodi totam, quo id ullam animi vero distinctio necessitatibus! Recusandae sapiente, ratione dicta blanditiis eveniet sint sed facere, laudantium atque praesentium suscipit ducimus, laborum cupiditate expedita?
            Aspernatur a veniam itaque harum fugiat ea nulla earum maxime nesciunt quidem repellat, culpa ipsa veritatis laudantium amet, possimus in numquam praesentium rerum! Ea maiores laborum deserunt, labore eius rem?
            At eos hic ullam deleniti, impedit assumenda amet non ipsa reiciendis deserunt incidunt rerum facilis ut quisquam atque aspernatur dolorum, omnis quod porro perspiciatis eius aliquid quas voluptas. Similique, iure.
            Accusamus nostrum nisi iure commodi voluptatibus facere ab culpa id fugit aliquam cumque, officiis reprehenderit aut ullam soluta illo repudiandae? Quae ex quisquam fuga maiores placeat? Laudantium consequuntur beatae exercitationem?
            Quia qui quis natus sapiente, fugit labore obcaecati in. Autem beatae atque, libero amet adipisci, facere possimus quisquam tempora cumque, explicabo eaque nostrum debitis eum necessitatibus vel iusto repudiandae rem.
            Reiciendis maiores laborum mollitia illum at commodi! Neque sit velit laboriosam, ullam a, molestias obcaecati necessitatibus ducimus reprehenderit in blanditiis illum officiis consectetur voluptates tempore! Perspiciatis officia expedita cum numquam.
            Perspiciatis culpa ipsa dicta, repudiandae quia modi tempora dolorem neque officia, maiores ipsam similique quaerat esse perferendis provident exercitationem. Explicabo porro maxime in excepturi fugiat illum vel assumenda, ex omnis.
            Sequi quasi quibusdam suscipit ratione molestias unde labore eligendi quisquam laudantium? Mollitia ab, eos non dignissimos nulla unde debitis esse neque harum, fuga illo repellat! Sint consectetur veritatis unde alias!
        </section>
      { showModal&&<Modal closeModal={closeModal}/>}

    </div>
  )
}

export default Page