import React from "react";
import "./Blogs.css"

const Blogs = () => {
  return (
    <div className="container questions">
      <h4>1. Difference between authorization and authentication</h4>
      <p>Ans:-authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>

      <h4>
        2. Why are you using firebase? What other options do you have to implement
        authentication?
      </h4>
      <p>Ans:-Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc. we can smoothly use Firebase.</p>
      
      <h4>3. What other services does firebase provide other than authentication</h4>
      <p>Ans:-Common Authentication Types The list below reviews some common authentication methods used to secure modern systems.1. Password-based authentication , 2. Multi-factor authentication, 3. Certificate-based authentication, 4. Biometric authentication, 5. Token-based authentication</p>
    </div>
  );
};

export default Blogs;
