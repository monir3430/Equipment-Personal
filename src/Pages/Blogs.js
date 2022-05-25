import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-blue-900'> How will you improve the performance of a React Application?</h1>
            <p>There are many techniques to improve performance. We will show the technique only.
                <li>Using Immutable Data Structures</li>
                <li>Function/Stateless Components and React.PureComponent</li>
                <li>Multiple Chunk Files</li>
                <li>Using Production Mode Flag in Webpack</li>
                <li>Dependency optimization</li>
                <li>Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
                <li>Avoid Inline Function Definition in the Render Function.</li>
                <li>Throttling and Debouncing Event Action in JavaScript</li>
                <li>Avoid using Index as Key for map</li>
                <li>Spreading props on DOM elements</li>
                <li>Use Reselect in Redux to Avoid Frequent Re-render</li>
                <li> Avoid Async Initialization in</li>
                <li>Memoize React Components</li>
                <li>CSS Animations Instead of JS Animations</li>
                <li>Using a CDN</li>
                <li>Using Web Workers for CPU Extensive Tasks</li>
                <li>Virtualize Long Lists</li>
                <li>Analyzing and Optimizing Your Webpack Bundle Bloat</li>
                <li>Consider Server-side Rendering</li>
                <li>Enable Gzip Compression on Web Server</li>
            </p> <br />

            <h1 className='text-2xl font-bold text-blue-900'> What are the different ways to manage a state in a React application?</h1>
            <p> There are four kinds of state..... <br /><span>Local state <br />
                Global state <br />
                Server state <br />
                URL state</span></p>
            <p>They will be implement by Redux or React hook or solid state declare in components</p>
            <br />

            <h1 className='text-2xl font-bold text-blue-900'>  How does prototypical inheritance work?</h1>

            <p>In a class-based model, you have Classes, which are represented by the triple “Parents, Variables, Methods”. Where: <br />

                <b>Parents</b> is the list of classes you’re extending. Classes may only extend other classes; <br />
                <b>Variables</b> is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y)” has 2 instance variables; <br />
                <b>Methods </b> is a table of “name → function” that describes which services each instance of the class will support; <br />
                <b>Instances </b>(or Objects) in a class-based model are represented with the tuple “Class, Values”. Where: <br />

                <b>Class</b> is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it; <br />
                Values is a list of the values for each variable the instance has.</p>

                <br />


                <h1 className='text-2xl font-bold text-blue-900'>  Why you do not set the state directly in React?</h1>
                

            <p>If we try to update state directly then it won't re-render the component. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
            <br />

            <h1 className='text-2xl font-bold text-blue-900'>  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

            <li>Using includes()</li>
            <li>Using indexOf()</li>
            <li>Using find()</li>
            <li>Using filter()</li>

            <br />

            <h1 className='text-2xl font-bold text-blue-900'> What is a unit test? Why should write unit tests?</h1>
            <p><b>A unit</b> test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property</p>
            <p><b>Through unit testing</b>, software developers know source code works at the atomic level.</p>
            
        </div>
    );
};

export default Blogs;