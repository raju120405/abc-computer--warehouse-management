import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <h3>Difference Between javascript and node.js</h3>
                <h6>Answer:</h6>
                <p> JavaScript is a programming language. It is running in any web browser with a proper browser engine. <br />
                    Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
                </p>
                <p>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. <br />
                    It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                </p>
                <h3>when should you use node.js and when should you use mongodb</h3>
                <h6>Answer:</h6>
                <p>
                    MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

                    NodeJS's responsibilty is especially to execute your application.
                </p>
                <h3>difference between sql and mysql</h3>
                <h6>Answer:</h6>
                <p>
                SQL does not support any connector.SQL supports only a single storage engine.SQL does not allow other processors or even its own binaries to manipulate data during execution.
                </p>
                <p>MySQL comes with an in-built tool known as MySQL Workbench that facilitates creating, designing, and building databases.MySQL has numerous variants and gets frequent updates.</p>
            </div>
        </div>
    );
};

export default Blog;
