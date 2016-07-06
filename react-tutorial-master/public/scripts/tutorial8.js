var Comment = React.createClass({
    render: function () {
        return(
            <div className="comment">
                <h2 className="nameAuthor">{this.props.author}</h2>
                <div className="comment-txt">{this.props.children}</div>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return(
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    getInitialState: function () {
        console.log('Khoi tao Form khi duoc goi');
        return {
            author: '',
            text: ''
        }
    },
    handleAuthorChange: function (e) {
        this.setState({
            author: e.target.value
        })
    },
    handleTextChange: function (e) {
        this.setState({
            text: e.target.value
        })
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if(!author || !text){
            return;
        }
        this.props.onCommentSubmit({
            author: author,
            text: text
        });
        this.setState({
            author: '',
            text: ''
        });
    },
    render: function () {
        return(
            <form className="frmComment" onSubmit={this.handleSubmit}>
                <label>
                    <span>Your name: </span>
                    <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                </label>
                <label>
                    <span>Your comment: </span>
                    <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
                </label>
                <p>
                    <input type="submit" value="Submit" className="btn-submit" />
                </p>
            </form>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        console.log('Khoi tao CommentBox dau tien khi duoc goi');
        return {data: []};
    },
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        console.log('componentDidMount');
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    handleCommentSubmit: function (comment) {
        var comments = this.state.data; // Lay du lieu cu
        console.log('comments: '+ comments);
        console.log('Du lieu moi : '+ comment);
        for(var p in comment){
            console.log(comment[p]);
        }
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({data: comments});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function () {
        return(
            <div className="commentBox">
                <h1>List Comment User</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);