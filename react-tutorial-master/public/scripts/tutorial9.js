var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
    render: function () {
        return(
            <div className="comment">
                <h4 className="nameAuthor">{this.props.author}</h4>
                <div className="txtComment">{this.props.children}</div>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        //console.log('comment: ' + this.props.data);
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
        return {
            author: '',
            text: ''
        }
    },
    handleAuthorChange: function (e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleFormSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.author.trim();
        console.log('author: ' + author + ' text: '+ text);
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
            <form className="frmComment" onSubmit={this.handleFormSubmit}>
                <h2 className="title">Ý kiến của bạn</h2>
                <label><span>Your name: </span><input type="text" value={this.state.author} onChange={this.handleAuthorChange} placeholder="Your name" /></label>
                <label><span>Your comment: </span><input type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Say something..." /></label>
                <p>
                    <input type="submit" value="Submit" className="btn-submit" />
                </p>
            </form>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        return{
            data: []
        };
    },
    loadCommentFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    data: data
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    componentDidMount: function () {
        this.loadCommentFromServer();
    },
    handleCommentSubmit: function (comment) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function () {
        return(
            <div className="commentBox">
                <h1 className="titleComment">List comment</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);