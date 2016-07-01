var Comment = React.createClass({
    render: function () {
        var md = new Remarkable();
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Long Lê">Comment 1</Comment>
                <Comment author="Ronaldo">This is *another* comment</Comment>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentList />,
    document.getElementById('content')
);