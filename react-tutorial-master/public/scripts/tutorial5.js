var Comment = React.createClass({
    rawMarkup: function () {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return {
            __html: rawMarkup
        };
    },

    render: function () {
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML = {this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Long Lê">Long Lê comment</Comment>
                <Comment author="Messi">Messi comment</Comment>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentList />,
    document.getElementById('content')
);