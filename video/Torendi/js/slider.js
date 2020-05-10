'use strict';

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var prefix = function prefix(obj, prop, value) {
	var prefs = ['webkit', 'Moz', 'O', 'ms'];
	for (var pref in prefs) {
		obj[prefs[pref] + prop] = value;
	}
};

var backgroundImagesArray = ["http://diemsarahtruong.com/wp-content/uploads/2017/12/torrloginss.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/Search-Copy-3.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/LIst-Copy.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/homes.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/map.png"],
	screenImagesArray = ["http://diemsarahtruong.com/wp-content/uploads/2017/12/torrloginss.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/Search-Copy-3.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/LIst-Copy.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/homes.png", "http://diemsarahtruong.com/wp-content/uploads/2017/12/map.png"],
	phoneImg = "https://s3.amazonaws.com/underbelly/playground/phone.png";

var PhoneSlider = function (_React$Component) {
	_inherits(PhoneSlider, _React$Component);

	function PhoneSlider(props) {
		_classCallCheck(this, PhoneSlider);

		var _this = _possibleConstructorReturn(this, (PhoneSlider.__proto__ || Object.getPrototypeOf(PhoneSlider)).call(this, props));

		_this.initializeSlider = _this.initializeSlider.bind(_this);
		_this.goTo = _this.goTo.bind(_this);

		_this.state = {
			slideIndex: 1
		};
		return _this;
	}

	_createClass(PhoneSlider, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initializeSlider();
			var slider = React.findDOMNode(this.refs.slider);
			slider.addEventListener("mousemove", function (event) {
				console.log("x", event.pageX);
				console.log("0 - 1", event.pageX / document.documentElement.clientWidth);
				console.log("percent", Math.round(event.pageX / document.documentElement.clientWidth * 100));
			}, false);
		}
  }, {
		key: 'initializeSlider',
		value: function initializeSlider() {
			var backgroundSlider = React.findDOMNode(this.refs.backgroundSlider),
				backgroundSlides = backgroundSlider.childNodes,
				backgroundSlidesArray = [].slice.call(backgroundSlides),
				backgroundLength = backgroundSlidesArray.length,
				backgroundTransform = 100 / backgroundLength * this.state.slideIndex,
				screenSlider = React.findDOMNode(this.refs.screenSlider),
				screenSlides = screenSlider.childNodes,
				screenSlidesArray = [].slice.call(screenSlides),
				screenLength = screenSlidesArray.length,
				screenTransform = 100 / screenLength * this.state.slideIndex,
				i = void 0;
			for (i = 0; i < backgroundLength; i++) {
				backgroundSlidesArray[i].style.width = 100 / backgroundLength + "%";
			}
			for (i = 0; i < screenLength; i++) {
				screenSlidesArray[i].style.width = 100 / screenLength + "%";
			}
			backgroundSlider.style.width = backgroundLength * 100 + "%";
			screenSlider.style.width = screenLength * 100 + "%";
			prefix(backgroundSlider.style, "Transform", 'translateX(-20%)');
			prefix(screenSlider.style, "Transform", 'translateX(-20%)');
		}
  }, {
		key: 'goTo',
		value: function goTo(index) {
			var backgroundSlider = React.findDOMNode(this.refs.backgroundSlider),
				backgroundSlides = backgroundSlider.childNodes,
				backgroundSlidesArray = [].slice.call(backgroundSlides),
				backgroundLength = backgroundSlidesArray.length,
				screenSlider = React.findDOMNode(this.refs.screenSlider),
				screenSlides = screenSlider.childNodes,
				screenSlidesArray = [].slice.call(screenSlides),
				screenLength = screenSlidesArray.length;

			prefix(backgroundSlider.style, "Transform", "translateX(-" + 100 / backgroundLength * index + "%)");
			prefix(screenSlider.style, "Transform", "translateX(-" + 100 / screenLength * index + "%)");

			this.setState({
				slideIndex: index
			});
		}
  }, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
				backgroundImages = _props.backgroundImages,
				screenImages = _props.screenImages,
				phone = _props.phone;

			return React.createElement(
				'div', {
					className: 'slider',
					ref: 'slider'
				},
				React.createElement(
					'div', {
						className: 'phone-slider'
					},
					React.createElement(
						'div', {
							className: 'phone-slider__background background'
						},
						React.createElement(
							'ul', {
								ref: 'backgroundSlider',
								className: 'background__list'
							},
							backgroundImages.map(function (item, index) {
								return React.createElement(PhoneSlide, {
									key: index,
									slideIndex: _this2.state.slideIndex,
									index: index,
									onClick: _this2.goTo,
									img: item,
									type: 'background'
								});
							})
						)
					),
					React.createElement(
						'div', {
							className: 'phone-slider__phone'
						},
						React.createElement('img', {
							src: phone,
							alt: 'iPhone'
						}),
						React.createElement(
							'div', {
								className: 'phone-slider__screen screen'
							},
							React.createElement(
								'ul', {
									ref: 'screenSlider',
									className: 'screen__list'
								},
								screenImages.map(function (item, index) {
									return React.createElement(PhoneSlide, {
										key: index,
										slideIndex: _this2.state.slideIndex,
										index: index,
										img: item,
										type: 'screen'
									});
								})
							)
						)
					)
				)
			);
		}
  }]);

	return PhoneSlider;
}(React.Component);

var PhoneSlide = function (_React$Component2) {
	_inherits(PhoneSlide, _React$Component2);

	function PhoneSlide(props) {
		_classCallCheck(this, PhoneSlide);

		var _this3 = _possibleConstructorReturn(this, (PhoneSlide.__proto__ || Object.getPrototypeOf(PhoneSlide)).call(this, props));

		_this3.handleClick = _this3.handleClick.bind(_this3);
		return _this3;
	}

	_createClass(PhoneSlide, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
  }, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
  }, {
		key: 'handleClick',
		value: function handleClick(event) {
			event.preventDefault();
			this.props.onClick(this.props.index);
		}
  }, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
				img = _props2.img,
				type = _props2.type,
				index = _props2.index,
				slideIndex = _props2.slideIndex,
				active = slideIndex === index ? "active" : "";

			if (type === "background") {
				return React.createElement(
					'li', {
						className: 'background__list-item background__list-item--' + active,
						onClick: this.handleClick
					},
					React.createElement('img', {
						src: img
					})
				);
			} else if (type === "screen") {
				return React.createElement(
					'li', {
						className: 'screen__list-item'
					},
					React.createElement('img', {
						src: img
					})
				);
			}
		}
  }]);

	return PhoneSlide;
}(React.Component);

React.render(React.createElement(PhoneSlider, {
	backgroundImages: backgroundImagesArray,
	screenImages: screenImagesArray,
	phone: phoneImg
}), document.getElementById("app"));
