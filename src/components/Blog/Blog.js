import React from "react";

const Blog = () => {
  return (
    <div className="my-12">
      <div className="p-5 mx-8 rounded-lg shadow-lg mb-5 border">
        <h2 className="text-3xl font-bold mb-3">
          What are the Difference between SQL and NoSQL ?
        </h2>
        <p>
          When it comes to choosing a database the biggest decisions is picking
          a relational (SQL) or non-relational (NoSQL) data structure. While
          both the databases are viable options still there are certain key
          differences between the two that users must keep in mind when making a
          decision. SQL databases are primarily called as Relational Databases
          (RDBMS); whereas NoSQL database are primarily called as non-relational
          or distributed database.In almost all situations SQL databases are
          vertically scalable. This means that you can increase the load on a
          single server by increasing things like RAM, CPU or SSD. But on the
          other hand NoSQL databases are horizontally scalable.SQL databases are
          table-based on the other hand NoSQL databases are either key-value
          pairs, document-based, graph databases or wide-column stores. This
          makes relational SQL databases a better option for applications that
          require multi-row transactions such as an accounting system or for
          legacy systems that were built for a relational structure.
        </p>
      </div>
      <div className="p-5 mx-8 rounded-lg shadow-lg mb-5 border">
        <h2 className="text-3xl font-bold mb-3">
          What is JWT, and how does it work?
        </h2>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.jwt differ from other web
          tokens in that they contain a set of claims. Claims are used to
          transmit information between two parties. What these claims are
          depends on the use case at hand. For example, a claim may assert who
          issued the token, how long it is valid for, or what permissions the
          client has been granted.
        </p>
      </div>
      <div className="p-5 mx-8 rounded-lg shadow-lg mb-5 border">
        <h2 className="text-3xl font-bold mb-3">
          What is the difference between javascript and NodeJS?
        </h2>
        <p>
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development. Javascript
          is a Scripting language. It is mostly abbreviated as JS. It can be
          said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.{" "}
        </p>
      </div>
      <div className="p-5 mx-8 rounded-lg shadow-lg mb-5 border">
        <h2 className="text-3xl font-bold mb-3">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
