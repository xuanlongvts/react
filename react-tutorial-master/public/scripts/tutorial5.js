var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author = "Long Le">This is on comment</Comment>
                <Comment author = "Ronaldo">This is *another* comment</Comment>
            </div>
        );
    }
});