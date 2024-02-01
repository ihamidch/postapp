import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Add = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const blog = { title, body, userId };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then((response) => {
            console.log(response);
            setLoading(false);
            if (response.ok) {
                console.log("successfully data is added");
                setSuccessMessage('Blog is added successfully');
                // Reset form fields after successful submission
                setTitle('');
                setBody('');
                setUserId('');
            }
        });
        // it means that if success message is not empty then set time out function will run
        if (successMessage) {
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
        // i want title only exapt text 
        //  use regex that remove text from title
        if (title) {
            let regex = /[^a-zA-Z ]/g;
            let result = title.replace(regex, " please enter only text");
            // alert(result);

        }
        else{
            alert("please enter title");
        }
        if (title.length > 5) {
            console.log("title is greater than 5 character");
        }
        else {
            console.log("title is less than 5 character");
        }
        // user id must be whole number
        if (userId % 1 === 0) {
            console.log("user id is whole number")
        }
        else {
            alert("user id is not whole number");
        }
        // user id must be positive
        if (userId > 0) {
            console.log("user id is positive")
        }
        else {
            alert("user id is negative");
        }

    };

    return (
        <div>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleSubmit} className="container">
                <div className="mb-3">
                    {loading && <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} // Controlled component
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        required
                        onChange={(e) => setBody(e.target.value)}
                        value={body} // Controlled component
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">User ID</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setUserId(e.target.value)}
                        value={userId} // Controlled component
                        id="exampleInputPassword1"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Add;
