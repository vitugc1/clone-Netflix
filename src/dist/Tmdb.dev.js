"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_KEY = 'a7b336a61e75c7e0c170f231fd5b29dd';
var API_BASE = 'https://api.themoviedb.org/3'; // eslint-disable-next-line import/no-anonymous-default-export

var basicFetch = function basicFetch(endpoint) {
  var req, json;
  return regeneratorRuntime.async(function basicFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(API_BASE).concat(endpoint)));

        case 2:
          req = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(req.json());

        case 5:
          json = _context.sent;
          return _context.abrupt("return", json);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}; // eslint-disable-next-line import/no-anonymous-default-export


var _default = {
  getHomeList: function getHomeList() {
    return regeneratorRuntime.async(function getHomeList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(basicFetch("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(API_KEY)));

          case 2:
            _context2.t0 = _context2.sent;
            _context2.t1 = {
              slug: 'originals',
              title: 'Originais do netflix',
              items: _context2.t0
            };
            _context2.next = 6;
            return regeneratorRuntime.awrap(basicFetch("/trending/all/week?language=pt-BR&api_key=".concat(API_KEY)));

          case 6:
            _context2.t2 = _context2.sent;
            _context2.t3 = {
              slug: 'trending',
              title: 'Recomendados para você',
              items: _context2.t2
            };
            _context2.next = 10;
            return regeneratorRuntime.awrap(basicFetch("/movie/top_rated?language=pt-BR&api_key=".concat(API_KEY)));

          case 10:
            _context2.t4 = _context2.sent;
            _context2.t5 = {
              slug: 'toprated',
              title: 'Em Alta',
              items: _context2.t4
            };
            _context2.next = 14;
            return regeneratorRuntime.awrap(basicFetch("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(API_KEY)));

          case 14:
            _context2.t6 = _context2.sent;
            _context2.t7 = {
              slug: 'action',
              title: 'Ação',
              items: _context2.t6
            };
            _context2.next = 18;
            return regeneratorRuntime.awrap(basicFetch("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(API_KEY)));

          case 18:
            _context2.t8 = _context2.sent;
            _context2.t9 = {
              slug: 'comedy',
              title: 'comedia',
              items: _context2.t8
            };
            _context2.next = 22;
            return regeneratorRuntime.awrap(basicFetch("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(API_KEY)));

          case 22:
            _context2.t10 = _context2.sent;
            _context2.t11 = {
              slug: 'horror',
              title: 'Terror',
              items: _context2.t10
            };
            _context2.next = 26;
            return regeneratorRuntime.awrap(basicFetch("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(API_KEY)));

          case 26:
            _context2.t12 = _context2.sent;
            _context2.t13 = {
              slug: 'romance',
              title: 'Romance',
              items: _context2.t12
            };
            _context2.next = 30;
            return regeneratorRuntime.awrap(basicFetch("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(API_KEY)));

          case 30:
            _context2.t14 = _context2.sent;
            _context2.t15 = {
              slug: 'documentary',
              title: 'Documentarios',
              items: _context2.t14
            };
            return _context2.abrupt("return", [_context2.t1, _context2.t3, _context2.t5, _context2.t7, _context2.t9, _context2.t11, _context2.t13, _context2.t15]);

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getMovieInfo: function getMovieInfo(movieId, type) {
    var info;
    return regeneratorRuntime.async(function getMovieInfo$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            info = {};

            if (!movieId) {
              _context3.next = 15;
              break;
            }

            _context3.t0 = type;
            _context3.next = _context3.t0 === 'movie' ? 5 : _context3.t0 === 'tv' ? 9 : 13;
            break;

          case 5:
            _context3.next = 7;
            return regeneratorRuntime.awrap(basicFetch("/movie/".concat(movieId, "?language=pt-BR&api_key=").concat(API_KEY)));

          case 7:
            info = _context3.sent;
            return _context3.abrupt("break", 15);

          case 9:
            _context3.next = 11;
            return regeneratorRuntime.awrap(basicFetch("/tv/".concat(movieId, "?language=pt-BR&api_key=").concat(API_KEY)));

          case 11:
            info = _context3.sent;
            return _context3.abrupt("break", 15);

          case 13:
            info = null;
            return _context3.abrupt("break", 15);

          case 15:
            return _context3.abrupt("return", info);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=Tmdb.dev.js.map
