import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
// Client ID: 221405088359-8m8bov2g7jje7rltbsvo14g6i4kbqf97.apps.googleusercontent.com


const App = () => {
    return(
        <div className='ui container'>
        <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList} />
        <Route path='/streams/new' component={StreamCreate} />
        <Route path='/streams/edit' component={StreamEdit} />
        <Route path='/streams/delete' component={StreamDelete} />
        <Route path='/streams/show' component={StreamShow} />
        </BrowserRouter>
        </div>
    )
}

export default App