var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is on Comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentList />,
    document.getElementById('content')
);