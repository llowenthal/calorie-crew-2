import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className="justify-items-center">
        <div className="text-3xl font-bold underline">Home Page</div>

        <div className="content-start items-start flex" style={{ width: '300px' }}>
          <ul className="list-disc list-inside">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus ratione animi,
                ipsa, eaque laboriosam repellendus sit mollitia natus aspernatur nobis temporibus at
                eveniet odit alias adipisci possimus facilis? Velit.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
