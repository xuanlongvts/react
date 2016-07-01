/**
 * Created by tikier on 7/1/16.
 */
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data = {this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data = {data} />,
    document.getElementById('content')
);
