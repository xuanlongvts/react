var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentForm = React.createClass({
    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit} >
                <input type="text" placeholder="Your name" onChange={this.handleAuthorChange} /><br />
                <input type="text" placeholder="Say something ..." onChange={this.handleTextChange} />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    render: function () {
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);