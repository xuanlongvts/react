'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nongNo_and_tiKi = [{
	name: 'nongNo',
	score: 80
}, {
	name: 'tiKi',
	score: 50
}];

var SinglePlayer = function (_React$Component) {
	_inherits(SinglePlayer, _React$Component);

	function SinglePlayer(props) {
		_classCallCheck(this, SinglePlayer);

		var _this = _possibleConstructorReturn(this, (SinglePlayer.__proto__ || Object.getPrototypeOf(SinglePlayer)).call(this, props));

		_this.state = {
			isPassed: false
		};
		return _this;
	}

	_createClass(SinglePlayer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({
				isPassed: this.props.score >= 60
			});

			console.log('componentWillMount => ', this.props.name);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('componentDidMount => ', this.props.name);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				isPassed: nextProps.score >= 60
			});

			console.log('componentWillReceiveProps => ', this.props.name + ' : ' + this.props.score);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.score === this.props.score) {
				console.log('shouldComponentUpdate => ', this.props.name + ' ? false');
				return false;
			}

			console.log('shouldComponentUpdate => ', this.props.name + ' ? true');
			return true;
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {
			console.log('componentWillUpdate => ', this.props.name);
			console.log('componentWillUpdate (nextProps) => ', nextProps);
			console.log('componentWillUpdate (nextState) => ', nextState);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			console.log('componentDidUpdate => ', this.props.name);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('componentWillUnmount: ', this.props.name);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h5',
					null,
					React.createElement(
						'span',
						null,
						'Name: '
					),
					' ',
					this.props.name
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'span',
						null,
						'Score: '
					),
					' ',
					React.createElement(
						'em',
						null,
						this.props.score
					)
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'span',
						null,
						'Pass: '
					),
					React.createElement('input', { type: 'checkbox',
						defaultChecked: this.state.isPassed,
						disabled: true
					})
				)
			);
		}
	}]);

	return SinglePlayer;
}(React.Component);

var ScoreBoard = function (_React$Component2) {
	_inherits(ScoreBoard, _React$Component2);

	function ScoreBoard(props) {
		_classCallCheck(this, ScoreBoard);

		var _this2 = _possibleConstructorReturn(this, (ScoreBoard.__proto__ || Object.getPrototypeOf(ScoreBoard)).call(this, props));

		_this2.state = {
			player: nongNo_and_tiKi
		};
		return _this2;
	}

	_createClass(ScoreBoard, [{
		key: 'changeScore',
		value: function changeScore(amount) {
			if (typeof amount !== 'number') {
				return false;
			}

			var player = this.state.player;
			var nong = player[0];
			nong.score = nong.score + amount;

			nong.score = nong.score > 100 ? 100 : nong.score;
			nong.score = nong.score < 0 ? 0 : nong.score;

			player[0] = nong;
			this.setState({
				player: player
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h4',
					null,
					'Score Board'
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'button',
						{
							onClick: function onClick(amount) {
								return _this3.changeScore(5);
							}
						},
						'Score of Nong: +5'
					),
					' ',
					React.createElement(
						'button',
						{
							onClick: function onClick(amount) {
								return _this3.changeScore(-5);
							}
						},
						'Score of Tiki: -5'
					)
				),
				this.state.player.map(function (item, key) {
					return React.createElement(SinglePlayer, { key: key, name: item.name, score: item.score });
				})
			);
		}
	}]);

	return ScoreBoard;
}(React.Component);

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'React Component Lifecycle Demo'
				),
				React.createElement(ScoreBoard, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));