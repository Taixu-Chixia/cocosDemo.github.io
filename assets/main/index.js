System.register("chunks:///_virtual/Basket.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Item.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, v3, Label, Color, Tween, tween, _decorator, Component, Item;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Label = module.Label;
      Color = module.Color;
      Tween = module.Tween;
      tween = module.tween;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Item = module.Item;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a0ff6ghgJFOMZnLQK+xva4e", "Basket", undefined);

      var _cc$_decorator = _decorator,
          ccclass = _cc$_decorator.ccclass,
          property = _cc$_decorator.property;
      var basketSize = {
        x: 6,
        y: 4,
        z: 8
      };
      var Basket = exports('Basket', (_dec = ccclass("Basket"), _dec(_class = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(Basket, _cc$Component);

        function Basket() {
          var _this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _this.ItemStartNode = null;
          _this.ItemPicNode = null;
          _this.NumLabelModel = null;
          _this.StarNode = null;
          _this.GasNode = null;
          _this.BasketModel = null;
          _this._itemId = 0;
          _this._basketId = 0;
          _this._itemNum = 0;
          _this._curShowNum = 0;
          _this._curSetPos = v3(0, 0, 0);
          _this._itemSize = {
            x: 0,
            y: 0,
            z: 0
          };
          _this._modelData = null;
          _this._isOverFlowed = false;
          return _this;
        }

        var _proto = Basket.prototype;

        _proto.init = function init(id, itemId, num, size) {
          this._initProperties();

          this._itemId = itemId;
          this._basketId = id;
          this._itemNum = num;
          this._curShowNum = num;

          this._initModelData(size);

          this._initBasketMesh();

          this._initItemPic();

          this._initLabelSettings();

          this._curSetPos = v3(this._itemSize.x / 2, this._itemSize.y / 2, -this._itemSize.z / 2);
          this._isOverFlowed = false;
        };

        _proto._initProperties = function _initProperties() {
          this.ItemStartNode = this.node.getChildByName("ItemStartNode");
          this.ItemPicNode = this.node.getChildByName("ItemPicNode");
          this.NumLabelModel = this.node.getChildByName("NumLabelModel");
          this.BasketModel = this.node.getChildByName("BasketModel"); // const starPre = SBX_Constants.SBXResourcesBundle.get(ItemPath.sbx_effect_star, cc.Prefab);
          // if (starPre) {
          //     const starNode = cc.instantiate(starPre);
          //     starNode.setParent(this.node);
          //     starNode.setScale(0.72, 0.72, 0.58);
          //     this.StarNode = starNode;
          // }
          // const gasPre = SBX_Constants.SBXResourcesBundle.get(ItemPath.sbx_effect_gas, cc.Prefab);
          // if (gasPre) {
          //     const gasNode = cc.instantiate(gasPre);
          //     gasNode.setParent(this.node);
          //     gasNode.setScale(0.72, 0.72, 0.58);
          //     this.GasNode = gasNode;
          // }
        };

        _proto._initModelData = function _initModelData(size) {
          this.node.setScale(size.x, size.y, size.z);
        }
        /**初始化篮子的模型 */
        ;

        _proto._initBasketMesh = function _initBasketMesh() {// const MRComp = this.BasketModel.getComponent(cc.MeshRenderer);
          // const meshPath = SkinShopItemInfo.get(SkinType.Food_Basket).skinInfo.get(this._skinId).meshPath;
          // let mesh = SBX_Constants.SBXResourcesBundle.get(meshPath, cc.Mesh);
          // if (!mesh) {
          //     trace(`篮子模型获取失败! 重新加载...`);
          //     SBX_Constants.SBXResourcesBundle.load(meshPath, cc.Mesh, (err, mesh) => {
          //         MRComp.mesh = mesh;
          //     });
          // } else {
          //     MRComp.mesh = mesh;
          // }
        }
        /**初始化篮子顶部图片 */
        ;

        _proto._initItemPic = function _initItemPic() {}
        /**添加label组件，初始化label属性 */
        ;

        _proto._initLabelSettings = function _initLabelSettings() {
          var Label$1 = this.NumLabelModel.addComponent(Label);
          Label$1.lineHeight = 80;
          Label$1.fontSize = 80;
          Label$1.color = new Color().fromHEX("#0d0d8e");
          Label$1.isBold = true;
          this.updateNumLabel(this._itemNum + "");
        };

        _proto.setOneItem = function setOneItem(node) {
          node.setParent(this.ItemStartNode);
          node.setPosition(this._curSetPos);
          var x = this._curSetPos.x;
          var y = this._curSetPos.y;
          var z = this._curSetPos.z;
          var size = node.getComponent(Item).itemSize;
          x += size.x;

          if (x + size.x * 0.5 > basketSize.x && z - size.z * 1.5 >= -basketSize.z) {
            x = size.x * 0.5;
            z -= size.z;
          }

          if (x + size.x * 0.5 > basketSize.x && z - size.z * 1.5 < -basketSize.z) {
            x = size.x * 0.5;
            z = -size.z * 0.5;

            if (y + size.y * 1.5 > basketSize.y) {
              this._isOverFlowed = true;
            } else {
              y += size.y;
            }
          }

          if (this._isOverFlowed) {
            x = Math.random() * (basketSize.x - size.x) + size.x / 2;
            y = Math.random() * (basketSize.y - size.y) + size.y / 2;
            z = -(Math.random() * (basketSize.z - size.z) + size.z / 2);
          }

          this._curSetPos = v3(x, y, z);
          this._curShowNum--;
          if (this._curShowNum === 0) this._setBasketDisappear();else this._showUpdateLabelAnim(this._curShowNum + "");
        };

        _proto._showUpdateLabelAnim = function _showUpdateLabelAnim(label) {
          var _this2 = this;

          Tween.stopAllByTarget(this.NumLabelModel);
          this.NumLabelModel.setScale(0.3, 0.6, 1);
          tween(this.NumLabelModel).to(0.1, {
            scale: v3(0, 0, 0)
          }).call(function () {
            _this2.updateNumLabel(label);
          }).to(0.1, {
            scale: v3(0.3, 0.6, 1)
          }).start();
        }
        /**更新篮子牌牌上的数字 */
        ;

        _proto.updateNumLabel = function updateNumLabel(label) {
          var Label$1 = this.NumLabelModel.getComponent(Label);
          Label$1.string = label;
          Label$1.updateRenderData(true);
          this.NumLabelModel.setScale(0.3 * label.length, 0.6, 1);
        }
        /**设置篮子消失 */
        ;

        _proto._setBasketDisappear = function _setBasketDisappear() {
          Tween.stopAllByTarget(this.node);
          tween(this.node).to(0.2, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.2, {
            scale: v3(0, 0, 0)
          }).call(function () {// SBX_Constants.FindGame.setBasketDisappear(this._basketId);
          }).start();
        };

        _createClass(Basket, [{
          key: "itemId",
          get: function get() {
            return this._itemId;
          }
        }]);

        return Basket;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Data.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "21d96w2GTRE4aVDUIGykq1B", "Data", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Data = exports('Data', (_dec = ccclass('Data'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function Data() {
          this.tList = [{
            ori: "湖北",
            name: "黄鹤楼(1916中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "1200",
            pic: "ID_514652FAA5F0461E93BD04A66ADB8950",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬1916)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_079450F6AE6F40C28EFC71E2A1BEC189",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(软1916)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "1000",
            pic: "ID_907921F41B5848A5BBBC55DF3C9D4BFF",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬15细支)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "1000",
            pic: "ID_5C886642A35D42EA84E28C715A279A51",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬1916如意)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_DF9C1620819F45F7AD590B7EA7695AE5",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬1916红爆)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_60CF8340C8ED4480935121B73DA3DFD2",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬平安)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "1000",
            pic: "ID_4A6A09E1EC734506AC15E7F92893953F",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬15)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "1000",
            pic: "ID_9BCD623B8EB14E9C81246DC21E6CE273",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬感恩)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "900",
            pic: "ID_D3D3832DA6044571BE85CE7D2BAB1434",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬漫天游)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "850",
            pic: "ID_A3DD895E84414A72B6C227E16FA1B613",
            colors: ["黄", "黑", "金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(软珍品)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "650",
            pic: "ID_A026C2EDC1904D1996E57F91561A62AF",
            colors: ["黑"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(视界)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "50",
            price: "560",
            pic: "ID_02FED7B6F46E408CA20C623588B42DFD",
            colors: ["蓝"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(珍品细支)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "500",
            pic: "ID_DC3C8DD43E1B4E8D8C48F4AC2A6B0B8B",
            colors: ["黑"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(金典中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "500",
            pic: "ID_262DE450B12848F3B09EF437A5153159",
            colors: ["金", "黑"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬珍品)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "900",
            price: "450",
            pic: "ID_41836B83725847559DC11239BCB211E6",
            colors: ["黑"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬峡谷情)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "450",
            pic: "ID_A685D2AA0885418D9C34D9FD53496649",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(视窗)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "800",
            price: "400",
            pic: "ID_DFD4CBADB5A343BD9C369CF1CDAD4A75",
            colors: ["蓝"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬峡谷柔情)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "400",
            pic: "ID_D22D37F33B2D4E23A0825F566EDB8DD9",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬峡谷情细支)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "350",
            pic: "ID_CF3D27E6270D43A9921C36A1CB1975A2",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬奇景)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "300",
            pic: "ID_A72D8E5551D54DD78B49165DF9805AD8",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(软红)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "260",
            pic: "ID_957183978739462FBA1946E549415E86",
            colors: ["金", "红"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(感恩中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "260",
            pic: "ID_3102CFAA57724B3086AF8E3833F6DA9B",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬天下胜景)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "260",
            pic: "ID_B84192D605914EA2AD4C3105235E7DBF",
            colors: ["蓝", "绿", "白"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬红)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "220",
            pic: "ID_BEE2C76804B0446F87973B6346613571",
            colors: ["金", "红"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬祝福)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "200",
            pic: "ID_BF2D5A76A462454786BBA855D5109D40",
            colors: ["红"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬嘉禧缘)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "200",
            pic: "ID_01867A8ACBF84DA0B8120CC8EFDEB337",
            colors: ["黄"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬蓝)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "220",
            pic: "ID_20D14A97BE754CA0B886CC7D09D25E5C",
            colors: ["蓝", "金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(软蓝)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "190",
            pic: "ID_631A8B13F4624721B8094B2C3EB3B9E1",
            colors: ["蓝", "金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬8度)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "200",
            pic: "ID_5A5CB1D7467E4176A4ED5770AA290657",
            colors: ["蓝", "黑"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(天下名楼)",
            sizeName: "55*86*11",
            size: {
              "x": 55,
              "y": 86,
              "z": 11
            },
            num: "1000",
            price: "160",
            pic: "ID_6362024254DD44BCBDDB0162DA7FE348",
            colors: ["黄", "金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(软雪之景)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "140",
            pic: "ID_4F0D67E897C74A1B92D6CFA48E0A7BDC",
            colors: ["红", "金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬雪之景)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_93E14C11558C4978B922987909A6A057",
            colors: ["白，金"]
          }, {
            ori: "湖北",
            name: "黄鹤楼(硬银紫)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_5A2B9A12B4C647959F62EE16B2BC88BD",
            colors: ["紫", "金"]
          }, {
            ori: "湖北",
            name: "红金龙(硬蓝爱你)",
            sizeName: "55*92*11",
            size: {
              "x": 55,
              "y": 92,
              "z": 11
            },
            num: "1000",
            price: "110",
            pic: "ID_08FAC8A946C74C33B3003058F6E7A951",
            colors: ["白", "蓝"]
          }, {
            ori: "湖北",
            name: "红金龙(软精品)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "110",
            pic: "ID_28232F8BE3CF4C8C873B6F1A35424F4F",
            colors: ["红"]
          }, {
            ori: "湖北",
            name: "红金龙(硬神州腾龙)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "65",
            pic: "ID_8AE59D0416A542A4BDA20116C4365E12",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "红金龙(硬新版)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "50",
            pic: "ID_433B93690FE84ABEB8A548655AFFA056",
            colors: ["白"]
          }, {
            ori: "湖北",
            name: "红金龙(软蓝九州腾龙)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "45",
            pic: "ID_40342CB0A9254DC7A291539A3F7694FB",
            colors: ["蓝"]
          }, {
            ori: "云南",
            name: "云烟(细支大重九)",
            sizeName: "55*103*11",
            size: {
              "x": 55,
              "y": 103,
              "z": 11
            },
            num: "1000",
            price: "1000",
            pic: "ID_892ED7C95A1240439B59DBB3BCDCF73E",
            colors: ["黄", "橙"]
          }, {
            ori: "云南",
            name: "云烟(软大重九)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "1000",
            pic: "ID_3C6B83577F7846EEBAF9F8CC7FC07FAA",
            colors: ["黄", "橙"]
          }, {
            ori: "云南",
            name: "云烟(黑金刚印象)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "600",
            pic: "ID_A175EF9878644227BB062FEBFC2E3AAE",
            colors: ["黑"]
          }, {
            ori: "云南",
            name: "云烟(软珍品)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "230",
            pic: "ID_12DF0C1A7F154CC9B3860342D9DC2906",
            colors: ["红"]
          }, {
            ori: "云南",
            name: "云烟(细支云龙)",
            sizeName: "55*103*11",
            size: {
              "x": 55,
              "y": 103,
              "z": 11
            },
            num: "1000",
            price: "150",
            pic: "ID_A212C71126D640D68C4B739AA8D45C43",
            colors: ["白"]
          }, {
            ori: "云南",
            name: "云烟(软紫)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "110",
            pic: "ID_E96F2071D6154EBA99010CCBAC2A2BDD",
            colors: ["红"]
          }, {
            ori: "云南",
            name: "玉溪(硬和谐)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "420",
            pic: "ID_B23EEBCA16994139ADE187B9537B744F",
            colors: ["金"]
          }, {
            ori: "云南",
            name: "玉溪(鑫中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "260",
            pic: "ID_39E60835824E414E99775B55AE9EBBDF",
            colors: ["红", "白"]
          }, {
            ori: "云南",
            name: "玉溪(软)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "230",
            pic: "ID_0C3A1DF2501F4D2BA6774349F7576969",
            colors: ["红", "白"]
          }, {
            ori: "云南",
            name: "红塔山(硬经典100)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "100",
            pic: "ID_AA4E99E219E8491BBC68E906B74DDCE6",
            colors: ["金"]
          }, {
            ori: "云南",
            name: "红塔山(软经典)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "85",
            pic: "ID_BFA51A18206A49EE9BBEAAC8F6791A52",
            colors: ["白"]
          }, {
            ori: "浙江",
            name: "利群(休闲细支)",
            sizeName: "55*86*11",
            size: {
              "x": 55,
              "y": 86,
              "z": 11
            },
            num: "1000",
            price: "1000",
            pic: "ID_81A5F9E135C24C9297CE8A782785F150",
            colors: ["蓝", "金"]
          }, {
            ori: "浙江",
            name: "利群(红利)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_FAB4B7D90B454DEE8437434B69D6388C",
            colors: ["红", "金"]
          }, {
            ori: "浙江",
            name: "利群(阳光尊中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "450",
            pic: "ID_FEE25EB0474F453BB85DE57FA7926C1B",
            colors: ["红"]
          }, {
            ori: "浙江",
            name: "利群(软长嘴)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "360",
            pic: "ID_D1D931E182854698A89862542D7F31F7",
            colors: ["红", "黑", "金"]
          }, {
            ori: "浙江",
            name: "利群(西子阳光)",
            sizeName: "55*86*11",
            size: {
              "x": 55,
              "y": 86,
              "z": 11
            },
            num: "1000",
            price: "310",
            pic: "ID_1A172110B88843A79EA69535CB264D7B",
            colors: ["白", "黄"]
          }, {
            ori: "浙江",
            name: "利群(长嘴)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "220",
            pic: "ID_2CCABE0E6CAC40E7843FB80B15ACC0CD",
            colors: ["红", "金", "黄"]
          }, {
            ori: "浙江",
            name: "利群(软蓝)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "180",
            pic: "ID_D19DFD4C384E4ECC937107954AF7A1AF",
            colors: ["蓝", "金"]
          }, {
            ori: "浙江",
            name: "利群(新版)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_E0631B14962441D3BD9692CFFFF8F318",
            colors: ["红", "白"]
          }, {
            ori: "河南",
            name: "黄金叶(天叶细支)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "1000",
            pic: "ID_E2B24C78CBC64CFBA0142F8E4C252EA8",
            colors: ["白", "黄"]
          }, {
            ori: "河南",
            name: "黄金叶(天叶)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_59A00B6C6C2A440CB6AF8E45E9549DAB",
            colors: ["白", "黄"]
          }, {
            ori: "河南",
            name: "黄金叶(天香细支)",
            sizeName: "55*96*11",
            size: {
              "x": 55,
              "y": 96,
              "z": 11
            },
            num: "1000",
            price: "600",
            pic: "ID_19389F55E8BF40F3A45ACCC13493C367",
            colors: ["白", "黄"]
          }, {
            ori: "河南",
            name: "黄金叶(浓香中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "350",
            pic: "ID_1A0B55E5BEB442128125EB2DDD8A7605",
            colors: ["黑", "金"]
          }, {
            ori: "河南",
            name: "黄金叶(商鼎)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "220",
            pic: "ID_001E24A093AE48F0AA4306097FFD8408",
            colors: ["白"]
          }, {
            ori: "河南",
            name: "黄金叶(乐途)",
            sizeName: "53*76*20",
            size: {
              "x": 53,
              "y": 76,
              "z": 20
            },
            num: "1000",
            price: "150",
            pic: "ID_E5F31A91A999435D8912F265CB959E32",
            colors: ["白", "红", "黄"]
          }, {
            ori: "河南",
            name: "黄金叶(小目标)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_D851CD7A398D4F26A4C52D443946DEEE",
            colors: ["蓝", "黄", "红"]
          }, {
            ori: "河南",
            name: "黄金叶(喜满堂)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "100",
            pic: "ID_AB90C923902D47E290EDF8D7D5EB7FA4",
            colors: ["红", "白"]
          }, {
            ori: "江西",
            name: "金圣(圣地中国红中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "550",
            pic: "ID_012FDFFDB8594FC884AAC68D8DACA552",
            colors: ["红", "黄"]
          }, {
            ori: "江西",
            name: "金圣(吉品)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "250",
            pic: "ID_0EF20344196A42298A7D1BCC48514324",
            colors: ["红", "黄"]
          }, {
            ori: "江西",
            name: "金圣(青瓷)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "180",
            pic: "ID_405401F9BE6349DD908EF43DEFD4EA0B",
            colors: ["蓝"]
          }, {
            ori: "江西",
            name: "金圣(滕王阁·紫光)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "150",
            pic: "ID_4ED8E6F8E15E45DB9986B7640CFACCC1",
            colors: ["紫", "金"]
          }, {
            ori: "江西",
            name: "金圣(硬滕王阁)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "100",
            pic: "ID_2543714E1A814312AA4089BC25B917FE",
            colors: ["黄", "蓝"]
          }, {
            ori: "江西",
            name: "金圣(硬红·十二生肖)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "70",
            pic: "ID_70CB2B56A8C543A180C6E7FE4A526F3A",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(金中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "800",
            pic: "ID_14B20A6B60EC4714A5BAB645A89FB53C",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(金细支)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "800",
            pic: "ID_DDC5268B3C7D4C869406AA43586BFBB6",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(软)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "700",
            pic: "ID_AB85A997CEFD459D963E88D1764B0608",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(双中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "500",
            pic: "ID_B9AF14B6CD9447909D51702535E4A66B",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(细支)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "500",
            pic: "ID_7A0528E1B53E422597E15DF31A6FE554",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "中华(硬)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "450",
            pic: "ID_9FD9E2F6F61640D8B16F06E1D9418B45",
            colors: ["红", "金"]
          }, {
            ori: "上海",
            name: "牡丹(软)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "130",
            pic: "ID_3FC465ECE8E34669A2E1E8839D88ECE1",
            colors: ["红", "白"]
          }, {
            ori: "安徽",
            name: "黄山(徽商新概念细支)",
            sizeName: "55*96*11",
            size: {
              "x": 55,
              "y": 96,
              "z": 11
            },
            num: "1000",
            price: "500",
            pic: "ID_CC2663D3B953462EB52F68C2393070D6",
            colors: ["黄", "金"]
          }, {
            ori: "安徽",
            name: "黄山(红方印金中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "400",
            pic: "ID_7F1D5C4ADCB04C87AEAA5AB6F801D84A",
            colors: ["红", "白", "金"]
          }, {
            ori: "安徽",
            name: "黄山(金皖烟)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "280",
            pic: "ID_BEBC82C7CAF44DFE9AE7C8E6E0913058",
            colors: ["黄", "金"]
          }, {
            ori: "安徽",
            name: "黄山(新制皖烟)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_6F77406624C640EEBCFAA8FF12AF54C2",
            colors: ["金"]
          }, {
            ori: "安徽",
            name: "黄山(硬记忆)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "100",
            pic: "ID_70BDAA755D054D7893285473E38B3F8C",
            colors: ["黄", "白"]
          }, {
            ori: "安徽",
            name: "黄山(新一品)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "70",
            pic: "ID_F69909BBDBC04C538CA0BA9CFB6B27EF",
            colors: ["红", "黑"]
          }, {
            ori: "湖南",
            name: "白沙(和天下)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "1000",
            pic: "ID_9C16790BA1D94987BE572C67EE401B13",
            colors: ["紫", "金"]
          }, {
            ori: "湖南",
            name: "白沙(软和天下)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "1000",
            pic: "ID_AF04DE7E714B4FD78B8F80C977C8FA0C",
            colors: ["紫", "金"]
          }, {
            ori: "湖南",
            name: "白沙(硬新精品二代)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "100",
            pic: "ID_6ED8A1197B6D4A7A85678224C1FDF4AC",
            colors: ["蓝", "金"]
          }, {
            ori: "湖南",
            name: "芙蓉王(硬蓝新版)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "350",
            pic: "ID_D157601363914CBAA50EC25222A34F08",
            colors: ["蓝", "金"]
          }, {
            ori: "湖南",
            name: "芙蓉王(硬中支)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "300",
            pic: "ID_B53D7D930BA1421083119BC57A4B5CEE",
            colors: ["白", "金"]
          }, {
            ori: "湖南",
            name: "芙蓉王(硬)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "250",
            pic: "ID_DF1E51DF441E41D88B50399950F50FC5",
            colors: ["黄", "金"]
          }, {
            ori: "河北",
            name: "钻石(细支荷花)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "420",
            pic: "ID_D8DA4AE3A19A45B79AE8CF044FD50C24",
            colors: ["绿", "黄", "红"]
          }, {
            ori: "河北",
            name: "钻石(软荷花)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "500",
            pic: "ID_B0757210498440A8BCA7462381A714CF",
            colors: ["绿", "黄", "红"]
          }, {
            ori: "河北",
            name: "钻石(荷花)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "400",
            pic: "ID_9BEE6CCC9FD4468481B03C5E2D7BC6E6",
            colors: ["绿", "黄", "红"]
          }, {
            ori: "河北",
            name: "钻石(硬蓝)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "55",
            pic: "ID_EFF6F0BA6B97486A8D579C9D50CBB93F",
            colors: ["蓝", "白"]
          }, {
            ori: "福建",
            name: "七匹狼(软灰)",
            sizeName: "53*83*20",
            size: {
              "x": 53,
              "y": 83,
              "z": 20
            },
            num: "1000",
            price: "210",
            pic: "ID_BB582C338009438FAF86E8A9836724B8",
            colors: ["灰", "红", "白", "黑"]
          }, {
            ori: "福建",
            name: "七匹狼(锋芒)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "180",
            pic: "ID_798F341997714C6A95445309D5E74117",
            colors: ["灰", "红", "白", "黑"]
          }, {
            ori: "福建",
            name: "七匹狼(纯境)",
            sizeName: "65*93*14",
            size: {
              "x": 65,
              "y": 93,
              "z": 14
            },
            num: "1000",
            price: "160",
            pic: "ID_E32A5ACBF410466C957C3AE548674ED3",
            colors: ["青", "金", "蓝"]
          }, {
            ori: "福建",
            name: "七匹狼(蓝钻)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "130",
            pic: "ID_7F5D742A90F642E7B696259FEDDEAF58",
            colors: ["蓝", "白"]
          }, {
            ori: "山东",
            name: "泰山(儒风细支)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "300",
            pic: "ID_9FE8471B87DB456DAB9E879AC2E9988B",
            colors: ["金", "白"]
          }, {
            ori: "山东",
            name: "泰山(望岳)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "190",
            pic: "ID_89675B039BF54AA7BCF5F6C3E65388A7",
            colors: ["金", "白"]
          }, {
            ori: "山东",
            name: "泰山(心悦)",
            sizeName: "55*100*11",
            size: {
              "x": 55,
              "y": 100,
              "z": 11
            },
            num: "1000",
            price: "160",
            pic: "ID_5C5D3A8CE94C44AF85FBBA38A1DC9E46",
            colors: ["蓝", "青", "白"]
          }, {
            ori: "山东",
            name: "泰山(青秀)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "140",
            pic: "ID_4B411445A7B3419C80FE20F2C85EDCEE",
            colors: ["白", "绿", "红"]
          }, {
            ori: "山东",
            name: "泰山(平安)",
            sizeName: "55*86*22",
            size: {
              "x": 55,
              "y": 86,
              "z": 22
            },
            num: "1000",
            price: "110",
            pic: "ID_CD2DAE969225499AA15CDFE0218B34AC",
            colors: ["红", "金"]
          }];
          this.oriMap = null;
          this.sizeMap = null;
          this.colorsMap = null;
        }

        Data.getInstance = function getInstance() {
          if (!Data.instance) {
            Data.instance = new Data();
          }

          return Data.instance;
        };

        var _proto = Data.prototype;

        _proto.initListCategory = function initListCategory(fun) {
          this.oriMap = new Map();
          this.sizeMap = new Map();
          this.colorsMap = new Map();

          for (var i = 0; i < this.tList.length; i++) {
            var item = this.tList[i];

            if (!this.oriMap.has(item.ori)) {
              var arr = [];
              arr.push(i);
              this.oriMap.set(item.ori, arr);
            } else {
              var _arr = this.oriMap.get(item.ori);

              _arr.push(i);

              this.oriMap.set(item.ori, _arr);
            }

            if (!this.sizeMap.has(item.sizeName)) {
              var _arr2 = [];

              _arr2.push(i);

              this.sizeMap.set(item.sizeName, _arr2);
            } else {
              var _arr3 = this.sizeMap.get(item.sizeName);

              _arr3.push(i);

              this.sizeMap.set(item.sizeName, _arr3);
            }

            for (var j = 0; j < item.colors.length; j++) {
              var color = item.colors[j];

              if (!this.colorsMap.has(color)) {
                var _arr4 = [];

                _arr4.push(i);

                this.colorsMap.set(color, _arr4);
              } else {
                var _arr5 = this.colorsMap.get(color);

                _arr5.push(i);

                this.colorsMap.set(color, _arr5);
              }
            }

            if (i == this.tList.length - 1) {
              console.warn(this.oriMap, this.sizeMap, this.colorsMap);
              fun && fun();
            }
          }
        };

        return Data;
      }(), _class2.instance = void 0, _class2)) || _class));
      var data = exports('data', Data.getInstance());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dweb_player.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, input, Input, animation, BoxCollider, tween, Vec3, RigidBody, math, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      animation = module.animation;
      BoxCollider = module.BoxCollider;
      tween = module.tween;
      Vec3 = module.Vec3;
      RigidBody = module.RigidBody;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "d0cb2is9vNM8qwXPEAa7Vcs", "dweb_player", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var dweb_player = exports('dweb_player', (_dec = ccclass('dweb_player'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(dweb_player, _Component);

        function dweb_player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.keydown_w = false;
          _this.keydown_s = false;
          _this.keydown_a = false;
          _this.keydown_d = false;
          _this.mouse_x = 0;
          _this.mouse_y = 0;
          _this.mouse_left = false;
          _this.mouse_right = false;
          _this.cameraFallGround = false;

          _initializerDefineProperty(_this, "playerModel", _descriptor, _assertThisInitialized(_this));

          _this.playerAnima = null;

          _initializerDefineProperty(_this, "Bracket", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerCamera", _descriptor3, _assertThisInitialized(_this));

          _this.Bracket_fall_x = 0;
          _this.player_runType = false;
          _this.cameraZoomMove = false;
          return _this;
        }

        var _proto = dweb_player.prototype;

        _proto.start = function start() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this.playerAnima = this.playerModel.getComponent(animation.AnimationController);
          this.Bracket = this.node.getChildByName('bracket');
          var collider = this.Bracket.getChildByName('cameraBox').getComponent(BoxCollider); // collider!.on('onTriggerEnter', this.onTriggerEnter, this)
          // collider!.on('onTriggerExit', this.onTriggerExit, this)
        };

        _proto.onTriggerEnter = function onTriggerEnter(event) {
          // console.log(event.type, event);
          console.log('camera落地'); // this.cameraFallGround = true
          // this.Bracket_fall_x = this.Bracket.eulerAngles.x
        };

        _proto.onTriggerExit = function onTriggerExit(event) {
          console.log('camera离开地面');
        };

        _proto.onMouseDown = function onMouseDown(event) {
          this.mouse_x = event.getLocationX();
          this.mouse_y = event.getLocationY();
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          var mouse_btn = event.getButton();

          if (mouse_btn == 0) {
            this.mouse_left = true;
          }

          if (mouse_btn == 2) {
            this.mouse_right = true;
            this.bracketHoming();
          }

          if (this.mouse_left && this.mouse_right) {
            this.player_runType = true;
            this.playerRunAnime();
          }
        };

        _proto.onMouseWheel = function onMouseWheel(event) {
          var scrollY = event.getScrollY();

          if (scrollY > 0) {
            this.cameraZoom("near");
          } else {
            this.cameraZoom("far");
          }
        };

        _proto.cameraZoom = function cameraZoom(far_near) {
          var _this2 = this;

          console.log(far_near);

          if (this.cameraZoomMove == false) {
            this.cameraZoomMove = true;
            var dis = far_near == "far" ? 1.5 : -1.5;
            var now_cameraZ = this.playerCamera.position.z;

            if (now_cameraZ + dis > 6) {
              this.cameraZoomMove = false;
              return;
            }

            if (now_cameraZ + dis < 1.5) {
              this.cameraZoomMove = false;
              return;
            }

            tween(this.playerCamera).to(0.5, {
              position: new Vec3(this.playerCamera.position.x, this.playerCamera.position.y, this.playerCamera.position.z + dis)
            }, {
              onComplete: function onComplete() {
                _this2.cameraZoomMove = false;
              }
            }).start();
          }
        };

        _proto.onMouseMove = function onMouseMove(event) {
          var mouse_btn = event.getButton();

          if (mouse_btn == 0) {
            this.mouse_left = true;
          }

          if (mouse_btn == 2) {
            this.mouse_right = true;
          }

          this.cameraRotate(event.getLocationX(), event.getLocationY());
        };

        _proto.onMouseUp = function onMouseUp(event) {
          var mouse_btn = event.getButton();

          if (mouse_btn == 0) {
            this.mouse_left = false;
          }

          if (mouse_btn == 2) {
            this.mouse_right = false;
          }

          if (this.mouse_left == false && this.mouse_right == false) {
            input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          }

          if (this.keydown_a == false && this.keydown_d == false && this.keydown_s == false && this.keydown_w == false) {
            this.player_runType = false;
            this.playerRunAnime();
          }
        };

        _proto.bracketHoming = function bracketHoming() {
          var world_rotation = this.Bracket.getWorldRotation();
          var parent_rotation_y = world_rotation.getEulerAngles(new Vec3(0, 0, 0)).y;
          var rotation_x = this.Bracket.eulerAngles.x;
          this.node.setRotationFromEuler(0, parent_rotation_y, 0);
          this.Bracket.setRotationFromEuler(rotation_x, 0, 0);
        };

        _proto.cameraRotate = function cameraRotate(x, y) {
          var rotation_y = this.Bracket.eulerAngles.y;
          var rotation_x = this.Bracket.eulerAngles.x;
          rotation_x += (y - this.mouse_y) * 1;
          rotation_y += (x - this.mouse_x) * -1;

          if (rotation_x > 90) {
            rotation_x = 90;
          }

          if (rotation_x < -90) {
            rotation_x = -90;
          }

          if (this.cameraFallGround) {
            var camera_rotation_x = this.playerCamera.eulerAngles.x;
            camera_rotation_x += y - this.mouse_y;

            if (camera_rotation_x < 0) {
              this.cameraFallGround = false;
              this.playerCamera.setRotationFromEuler(0, 180, 0);
              this.Bracket.setRotationFromEuler(rotation_x, rotation_y, 0);
              return;
            }

            if (camera_rotation_x > 90) {
              camera_rotation_x = 90;
            }

            this.playerCamera.setRotationFromEuler(camera_rotation_x, 180, 0);
            this.Bracket.setRotationFromEuler(this.Bracket_fall_x, rotation_y, 0);
          } else {
            this.Bracket.setRotationFromEuler(rotation_x, rotation_y, 0);
          }

          if (this.mouse_right) {
            this.bracketHoming();
          }

          this.mouse_x = x;
          this.mouse_y = y;
        };

        _proto.onKeyDown = function onKeyDown(event) {
          // console.log(event)
          var code = event.keyCode;
          var pos = this.node.getPosition();

          switch (code) {
            case 87:
              //按下w 向上移动
              if (this.player_runType == false) {
                this.player_runType = true;
                this.playerRunAnime();
              }

              this.keydown_w = true;
              break;

            case 83:
              //按下s 向上移动
              if (this.player_runType == false) {
                this.player_runType = true;
                this.playerRunAnime();
              }

              this.keydown_s = true;
              break;

            case 65:
              //按下a 向左移动
              if (this.player_runType == false) {
                this.player_runType = true;
                this.playerRunAnime();
              }

              this.keydown_a = true;
              break;

            case 68:
              //按下d 向右移动
              if (this.player_runType == false) {
                this.player_runType = true;
                this.playerRunAnime();
              }

              this.keydown_d = true;
              break;

            case 49:
              this.playerAnima.setValue('lightFit', true);
              break;

            case 50:
              this.playerAnima.setValue('huixuan', true);
              break;

            case 32:
              this.playerAnima.setValue('jump', true);
              this.node.getComponent(RigidBody).applyLocalImpulse(new Vec3(0, 3, 0)); // tween(this.node).to(0.3, { position: new Vec3(this.node.position.x, 3, this.node.position.z) }, {
              //   easing: "circOut",
              //   onStart: () => {
              //     this.jump = true
              //   }
              // }).start()

              break;
          }
        };

        _proto.onKeyUp = function onKeyUp(event) {
          var code = event.keyCode;

          switch (code) {
            case 87:
              this.keydown_w = false;

              if (this.player_runType) {
                if (this.mouse_left && this.mouse_right || this.keydown_a || this.keydown_d || this.keydown_s) {
                  break;
                } else {
                  this.player_runType = false;
                  this.playerRunAnime();
                }
              }

              break;

            case 83:
              this.keydown_s = false;

              if (this.player_runType) {
                if (this.mouse_left && this.mouse_right || this.keydown_a || this.keydown_d || this.keydown_w) {
                  break;
                } else {
                  this.player_runType = false;
                  this.playerRunAnime();
                }
              }

              break;

            case 65:
              this.keydown_a = false;

              if (this.player_runType) {
                if (this.mouse_left && this.mouse_right || this.keydown_w || this.keydown_d || this.keydown_s) {
                  break;
                } else {
                  this.player_runType = false;
                  this.playerRunAnime();
                }
              }

              break;

            case 68:
              this.keydown_d = false;

              if (this.player_runType) {
                if (this.mouse_left && this.mouse_right || this.keydown_a || this.keydown_w || this.keydown_s) {
                  break;
                } else {
                  this.player_runType = false;
                  this.playerRunAnime();
                }
              }

              break;
          }
        };

        _proto.playerRunAnime = function playerRunAnime() {// if (this.player_runType) {
          //   this.playerAnima!.setValue("walk", true)
          // } else {
          //   this.playerAnima!.setValue("walk", false)
          // }
        };

        _proto.getDirection = function getDirection(x, y, z, node) {
          var ret = new Vec3(x, y, z);
          math.Vec3.transformQuat(ret, ret, node.getRotation());
          return ret;
        };

        _proto.update = function update(deltaTime) {
          if (this.keydown_w || this.mouse_left && this.mouse_right) {
            this.playerModel.setRotationFromEuler(0, 0, 0);
            var pos = this.node.getPosition();
            math.Vec3.scaleAndAdd(pos, pos, this.getDirection(0, 0, -1, this.node), deltaTime * 5);
            this.node.setPosition(pos);
          }

          if (this.keydown_s) {
            this.playerModel.setRotationFromEuler(0, 180, 0);

            var _pos = this.node.getPosition();

            math.Vec3.scaleAndAdd(_pos, _pos, this.getDirection(0, 0, 1, this.node), deltaTime * 5);
            this.node.setPosition(_pos);
          }

          if (this.keydown_a) {
            this.playerModel.setRotationFromEuler(0, 90, 0);

            var _pos2 = this.node.getPosition();

            math.Vec3.scaleAndAdd(_pos2, _pos2, this.getDirection(-1, 0, 0, this.node), deltaTime * 5);
            this.node.setPosition(_pos2);
          }

          if (this.keydown_d) {
            this.playerModel.setRotationFromEuler(0, -90, 0);

            var _pos3 = this.node.getPosition();

            math.Vec3.scaleAndAdd(_pos3, _pos3, this.getDirection(1, 0, 0, this.node), deltaTime * 5);
            this.node.setPosition(_pos3);
          }
        };

        return dweb_player;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Bracket", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerCamera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ItemList.ts', './Xllb.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Node, Camera, Prefab, _decorator, v3, Input, Quat, quat, instantiate, MeshRenderer, tween, Component, ItemList, Xllb;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Camera = module.Camera;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      v3 = module.v3;
      Input = module.Input;
      Quat = module.Quat;
      quat = module.quat;
      instantiate = module.instantiate;
      MeshRenderer = module.MeshRenderer;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ItemList = module.ItemList;
    }, function (module) {
      Xllb = module.Xllb;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

      cclegacy._RF.push({}, "6c420qPq0lOS6+dueeDZYWF", "Game", undefined);

      var _cc$_decorator = _decorator,
          ccclass = _cc$_decorator.ccclass,
          property = _cc$_decorator.property;
      var Game = exports('Game', (_dec = ccclass('Game'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Camera), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(ItemList), _dec9 = property(Prefab), _dec10 = property(Node), _dec11 = property(Xllb), _dec(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(Game, _cc$Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "BasketNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MainLight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "CCCamera", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemPrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "basketPrefab", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "noYesNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "myList", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "wallPrefab", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "GameNode", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lb", _descriptor10, _assertThisInitialized(_this));

          _this.curToggle = 1;
          _this.wallNodes = [];
          _this.hasGetTouch = false;
          _this.canPlay = false;
          _this.isNodeActive = false;
          _this.isGameSucceed = false;
          _this.scrollCtrlPos = {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 0
          };
          _this._itemNodes = [];
          _this._extraItemNodes = [];
          _this._basketNodes = [];
          _this._touchingBallNode = null;
          _this._itemData = '';
          _this._extraItemData = '';
          _this._velocityNow = v3();
          _this._curScrollSpeed = 0;
          _this._itemKindData = [];
          _this._itemNumData = [];
          _this._curSettedItemNum = 0;
          _this._canScroll = false;
          _this._checkDtCounter = 0;
          return _this;
        }

        var _proto = Game.prototype;

        _proto.onLoad = function onLoad() {
          this.initGame();
        };

        _proto.update = function update(dt) {};

        _proto.initGame = function initGame(level) {
          this._initCamera();

          this._initMainLight();

          this.node.on(Input.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);

          this._initBaskets();

          this._canScroll = true;
          return;
        }
        /**初始化相机设置 */
        ;

        _proto._initCamera = function _initCamera() {
          this.CCCamera.node.setPosition(0, 7, 20);
          this.CCCamera.node.setRotation(Quat.fromEuler(quat(), -22, 0, 0)); // this.CCCamera.fov = 45;
        }
        /**初始化MainLight设置 */
        ;

        _proto._initMainLight = function _initMainLight() {
          this.MainLight.setPosition(2, 1.5, 1.8);
          this.MainLight.setRotation(Quat.fromEuler(quat(), -20, 42, -5));
        };

        _proto.clearNodes = function clearNodes() {
          // 清空物品
          this.BasketNode.removeAllChildren();
          return; // for (let i = 0; i < this._itemNodes.length; i++) {
          //     this._itemNodes[i] && this._itemNodes[i].destroy();
          // }
          // this._itemNodes = [];
          // for (let i = 0; i < this._extraItemNodes.length; i++) {
          //     this._extraItemNodes[i] && this._extraItemNodes[i].destroy();
          // }
          // this._extraItemNodes = [];
          // for (let i = 0; i < this._basketNodes.length; i++) {
          //     this._basketNodes[i] && this._basketNodes[i].destroy();
          // }
          // this._basketNodes = [];
        };

        _proto._initBaskets = function _initBaskets() {
          // 正常屏幕显示5的柜台
          var x = 5;
          var y = 3.5;
          var z = 5;
          this.BasketNode.setScale(5, 3.5, 5);
          var node = instantiate(this.wallPrefab);
          this.GameNode.addChild(node);
          node.setScale(x, 0.01, z);
          node.setPosition(0, -y / 2, 0);
        }
        /**touchEnd绑定事件 */
        ;

        _proto._onTouchEnd = function _onTouchEnd(event) {};

        _proto._onTouchStart = function _onTouchStart(event) {
          console.warn(this.CCCamera.getComponent(Camera).worldToScreen(v3(event.getLocation().x, event.getLocation().y, 0)));
          if (!this.canPlay || this.myList.curItemId < 0) return;
          this.BasketNode.removeAllChildren();
          var node = instantiate(this.itemPrefab);
          node.setScale(0.1, 0.1, 0.1);
          var mesh = node.getComponent(MeshRenderer);
          mesh.setMaterial(this.myList.materials[this.myList.curItemId], 0);
          node.setPosition(0, 0, 0);
          node.setParent(this.BasketNode);
          return; //     if (!this.canPlay || this.myList.curItemId < 0) return;
          //     this._setFoodTouchMove(event);
          // }
        }
        /**touchMove绑定事件 */
        ;

        _proto._onTouchMove = function _onTouchMove(event) {
          console.warn(this.CCCamera.getComponent(Camera).worldToScreen(v3(event.getLocation().x, event.getLocation().y, 0))); // event.getUILocation(this._tempTouchVec2);
          // if (this._judgeInArea(this._tempTouchVec2, this.gameCtrlPos)) {
          //     if (!this.canPlay || this.myList.curItemId < 0) return;
          //     this._setFoodTouchMove(event);
          // }
        }
        /**放置食物的touchMove事件 */
        ;

        _proto._setFoodTouchMove = function _setFoodTouchMove(event) {// if (!this.canPlay || this.myList.curItemId < 0) return;
          // event.getLocation(this._tempTouchVec2);
          // let pos = this._tempTouchVec2;
          // if (!this._judgeInArea(pos, this.touchControlPos)) return;
          // foodRadiux.x = (this.touchControlPos.x2 - this.touchControlPos.x1) / this.openSize.x;
          // foodRadiux.z = (this.touchControlPos.y2 - this.touchControlPos.y1) / this.openSize.z;
          // const x = Math.floor((pos.x - this.touchControlPos.x1) / foodRadiux.x);
          // const z = Math.floor((pos.y - this.touchControlPos.y1) / foodRadiux.z);
          // if (this._touchMoveState === touchMoveState.Normal) {
          //     //当玩家手指移动距离太近,不放东西
          //     const disx = x > this._setFoodTouchPos.x ? x - this._setFoodTouchPos.x : this._setFoodTouchPos.x - x;
          //     const disz = z > this._setFoodTouchPos.z ? z - this._setFoodTouchPos.z : this._setFoodTouchPos.z - z;
          //     let chooseedFoodSize: ISize = { x: 1, y: 1, z: 1 };
          //     if (this.choosedBasket != -1) {
          //         // chooseedFoodSize = this._modelsData[this._foodKindData[this.choosedBasket]];
          //         chooseedFoodSize = SBX_Constants.itemData.get(this._foodKindData[this.choosedBasket]);
          //     }
          //     if (disx < chooseedFoodSize.x && disz < chooseedFoodSize.z) return;
          //     if (this.choosedBasket === -1) return;
          //     if (this._foodNumInBasket[this.choosedBasket] === 0) {
          //         this._basketNodes[this.choosedBasket].getComponent(SBX_Basket).setBasketShake();
          //         return;
          //     }
          //     this._onSetFoodStateTouchMove(x, z);
          //     this._reportGuidingSetPos(event);
          //     this._setFoodTouchPos.x = x;
          //     this._setFoodTouchPos.z = z;
          // }
          // if (this._touchMoveState === touchMoveState.SetBack) this._onSetBackStateTouchMove(x, z);
        }
        /**放置食物的touchMove事件,放置模式 */
        ;

        _proto._onSetFoodStateTouchMove = function _onSetFoodStateTouchMove(x, z) {// const foodId = this._foodKindData[this.choosedBasket];
          // const boxComp = this._boxNodes[this.curOpenBoxIndex].getComponent(SBX_Box);
          // const setRes = this._judgeCanSetFoodInBox(this.curOpenBoxIndex, x, z, foodId);
          // if (setRes.canSet) {
          //     let food = this._basketFoodNodes[this.choosedBasket].pop();
          //     this._foodNumInBasket[this.choosedBasket]--;
          //     // 判断限时挑战篮子是否完成
          //     if (this.basketTiming && this._foodNumInBasket[this.choosedBasket] === 0) {
          //         const basketComp = this._basketNodes[this.choosedBasket].getComponent(SBX_Basket);
          //         basketComp.successBasketTiming();
          //     }
          //     this._setOneFoodInBox(this.curOpenBoxIndex, setRes.setPos.x, setRes.setPos.y, setRes.setPos.z, food);
          //     boxComp.isOpen ? (boxComp.setEmpty = false) : (boxComp.isEmpty = false);
          //     // 判断显示挑战盒子是否完成
          //     if (this.boxTiming && this._judgeBoxIsFull(this.curOpenBoxIndex)) {
          //         boxComp.successBoxTiming();
          //     }
          //     const foodData = SBX_Constants.itemData.get(foodId);
          //     this._addProgress(foodData);
          //     this._judgeSetFoodMove(setRes, foodData);
          //     this.judgeGameSuccess();
          // } else {
          //     this._showRedFood(this.curOpenBoxIndex, x, z, foodId);
          // }
        }
        /**判断第boxId个盒子的这个位置能否放下食物 */
        ;

        _proto._judgeCanSetFoodInBox = function _judgeCanSetFoodInBox(boxId, x, z, foodId) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const boxSize = boxComp.objBoxSize;
          // let canSet: boolean = false;
          // let setPos = { x: -1, y: -1, z: -1 };
          // if (!boxComp.canSetFood) return { canSet: canSet, setPos: setPos };
          // const foodSize = SBX_Constants.itemData.get(foodId);
          // const startx = x - (foodSize.x - 1) < 0 ? 0 : x - (foodSize.x - 1);
          // const endz = z - (foodSize.z - 1) < 0 ? 0 : z - (foodSize.z - 1);
          // xiout: for (let xi = startx; xi <= x; xi++) {
          //     ziout: for (let zi = z; zi >= endz; zi--) {
          //         const yiMax = SBX_Constants.levelMode === LevelMode.Food ? boxSize.y - foodSize.y : 0;
          //         yiout: for (let yi = 0; yi <= yiMax; yi++) {
          //             let thisCanSet = true;
          //             //对于yi高度,在x-y-z空间得够放
          //             const xMax = xi + foodSize.x;
          //             const yMax = yi + foodSize.y;
          //             const zMax = zi + foodSize.z;
          //             const sizex = boxSize.x - 1;
          //             const sizey = boxSize.y - 1;
          //             const sizez = boxSize.z - 1;
          //             iout: for (let i = xi; i < xMax; i++) {
          //                 for (let j = yi; j < yMax; j++) {
          //                     for (let k = zi; k < zMax; k++) {
          //                         if (i > sizex || j > sizey || k > sizez || this._boxFoodNodes[boxId][i][j][k]) {
          //                             thisCanSet = false;
          //                             break iout;
          //                         }
          //                     }
          //                 }
          //             }
          //             //当yi不为0时,底部必须是被填满的,不然不能放
          //             if (yi != 0) {
          //                 const yDown = yi - 1;
          //                 iout: for (let i = xi; i < xMax; i++) {
          //                     for (let k = zi; k < zMax; k++) {
          //                         if (i > sizex || k > sizez || !this._boxFoodNodes[boxId][i][yDown][k]) {
          //                             thisCanSet = false;
          //                             break iout;
          //                         }
          //                     }
          //                 }
          //             }
          //             if (thisCanSet) {
          //                 // edit by hehao
          //                 setPos.x = xi;
          //                 setPos.y = yi;
          //                 setPos.z = zi;
          //                 // setPos = { x: xi, y: yi, z: zi };
          //                 canSet = true;
          //                 break xiout;
          //             }
          //         }
          //     }
          // }
          // return { canSet: canSet, setPos: setPos };
        }
        /**放置一个食物到盒子里 */
        ;

        _proto._setOneFoodInBox = function _setOneFoodInBox(boxId, x, y, z, food) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const foodComp = food.getComponent(SBX_Food);
          // food.parent = null;
          // boxComp.FoodNode.addChild(food);
          // food.setPosition(x, y, -z);
          // foodComp.playScaleAnim();
          // const foodSize: IItemModelData = SBX_Constants.itemData.get(foodComp.foodId);
          // const xMax = x + foodSize.x;
          // const yMax = y + foodSize.y;
          // const zMax = z + foodSize.z;
          // for (let i = x; i < xMax; i++)
          //     for (let j = y; j < yMax; j++)
          //         for (let k = z; k < zMax; k++) {
          //             this._boxFoodNodes[boxId][i][j][k] = { node: food, x: x, y: y, z: z, isStatic: false };
          //         }
        }
        /**放置食物的touchMove事件,放回模式 */
        ;

        _proto._onSetBackStateTouchMove = function _onSetBackStateTouchMove(x, z) {// const removeObj = this._removeFoodFromBox(this.curOpenBoxIndex, x, z);
          // for (let i = 0; i < this._foodKindData.length; i++) {
          //     if (removeObj.removeFoodId === this._foodKindData[i]) {
          //         this._removeFoodGuide();
          //         this._returnOneFoodInBasket(i, removeObj.node);
          //         this._foodNumInBasket[i]++;
          //         const foodData = SBX_Constants.itemData.get(removeObj.removeFoodId);
          //         let v = 0;
          //         if (SBX_Constants.levelMode === LevelMode.Food) v = foodData.x * foodData.y * foodData.z;
          //         else v = foodData.x * foodData.z;
          //         this._curfoodVolume -= v;
          //         SBX_Constants.SBXGameScene.setProgress(this._curfoodVolume / this._foodVolume);
          //     }
          // }
        }
        /**从盒子里移除物品,判断在(x,z)这个点上该移除哪个物体 */
        ;

        _proto._removeFoodFromBox = function _removeFoodFromBox(boxId, x, z) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const boxSize = boxComp.objBoxSize;
          // let removeObj = { removeFoodId: -1, node: null };
          // for (let yi = boxSize.y - 1; yi >= 0; yi--) {
          //     if (this._boxFoodNodes[boxId][x][yi][z]) {
          //         if (this._judgeCanRemoveFoodFromBox(boxId, x, yi, z)) {
          //             SBX_Ads.playAudio(AudioNames.NaQi);
          //             removeObj = this._removeOneFoodFromBox(boxId, x, yi, z);
          //             this._removeEmptySubDailyUseTime(boxId);
          //             return removeObj;
          //         }
          //     }
          // }
          // return removeObj;
        }
        /**判断是否可以从盒子里移除这个物品,如果上面有东西压着,则不能移除 */
        ;

        _proto._judgeCanRemoveFoodFromBox = function _judgeCanRemoveFoodFromBox(boxId, x, y, z) {// if (SBX_Constants.levelMode === LevelMode.Cosmetics) return true;
          // const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const boxSize = boxComp.objBoxSize;
          // const node = this._boxFoodNodes[boxId][x][y][z].node;
          // const startx = this._boxFoodNodes[boxId][x][y][z].x;
          // const starty = this._boxFoodNodes[boxId][x][y][z].y;
          // const startz = this._boxFoodNodes[boxId][x][y][z].z;
          // const Food = node.getComponent(SBX_Food);
          // const foodSize = SBX_Constants.itemData.get(Food.foodId);
          // if (SBX_Constants.dailyInfo.isDailyChallenge) {
          //     if (this._boxFoodNodes[boxId][x][y][z].isStatic) {
          //         SBX_Logger.log("每日挑战固定物品，不可移除！");
          //         return false;
          //     }
          // }
          // if (y === boxSize.y - 1) {
          //     return true; //在盒子的最上方,可以移除
          // } else {
          //     const yi = y + 1;
          //     for (let xi = startx; xi < startx + foodSize.x; xi++) {
          //         for (let zi = startz; zi < startz + foodSize.z; zi++) {
          //             if (this._boxFoodNodes[boxId][xi][yi][zi]) {
          //                 return false;
          //             }
          //         }
          //     }
          //     return true;
          // }
        }
        /**从盒子里移除一个物品 */
        ;

        _proto._removeOneFoodFromBox = function _removeOneFoodFromBox(boxId, x, y, z) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const node = this._boxFoodNodes[boxId][x][y][z].node;
          // const Food = node.getComponent(SBX_Food);
          // const foodSize = SBX_Constants.itemData.get(Food.foodId);
          // Food.resetAllAnim();
          // const startx = this._boxFoodNodes[boxId][x][y][z].x;
          // const starty = this._boxFoodNodes[boxId][x][y][z].y;
          // const startz = this._boxFoodNodes[boxId][x][y][z].z;
          // const endx = startx + foodSize.x;
          // const endy = starty + foodSize.y;
          // const endz = startz + foodSize.z;
          // for (let i = startx; i < endx; i++)
          //     for (let j = starty; j < endy; j++)
          //         for (let k = startz; k < endz; k++) {
          //             this._boxFoodNodes[boxId][i][j][k] = null;
          //         }
          // if (this._judgeBoxIsEmpty(boxId)) {
          //     boxComp.isOpen ? (boxComp.setEmpty = true) : (boxComp.isEmpty = true);
          //     this._stopShakeAllFoodInBox(boxId);
          // }
          // return { removeFoodId: Food.foodId, node: node };
        };

        _proto._removeEmptySubDailyUseTime = function _removeEmptySubDailyUseTime(boxId) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // if (boxComp.isOpen && this._judgeBoxIsEmpty(boxId)) SBX_Constants.SBXGameScene.subSetBackUseTime();
        }
        /**展示红色食物特效 */
        ;

        _proto._showRedFood = function _showRedFood(boxId, x, z, id) {// const boxComp = this._boxNodes[boxId].getComponent(SBX_Box);
          // const boxSize = boxComp.objBoxSize;
          // if (!boxComp.canSetFood) return;
          // yiout: for (let yi = boxSize.y - 1; yi >= -1; yi--) {
          //     if (yi === -1 || this._boxFoodNodes[boxId][x][yi][z]) {
          //         let y = yi + 1;
          //         if (y >= boxSize.y) break yiout;
          //         let food = cc.instantiate(this.foodPre);
          //         boxComp.FoodNode.addChild(food);
          //         const Food = food.getComponent(SBX_Food);
          //         Food.init(id);
          //         food.setPosition(x, y, -z);
          //         Food.changeMaterial(FoodMaterialIds.RED);
          //         this.scheduleOnce(() => {
          //             Food.onPutAway();
          //             food.destroy();
          //         }, 0.2);
          //         break yiout;
          //     }
          // }
        };

        _proto._returnOneFoodInBasket = function _returnOneFoodInBasket(basketId, node) {// const rand = Math.floor(Math.random() * this._foodSettedPositions[basketId].length);
          // const pos = this._foodSettedPositions[basketId][rand];
          // const jitter = (Math.random() - 0.5) * 0.5;
          // const basketComp = this._basketNodes[basketId].getComponent(SBX_Basket);
          // node.parent = null;
          // basketComp.foodStartNode.addChild(node);
          // node.setPosition(pos.x + jitter, pos.y, pos.z + jitter);
          // this._basketFoodNodes[basketId].push(node);
        }
        /**
        * 工具函数---判断是否在这个区域内
        * @param pos 传入一个点: { x: number, y: number }
        * @param ctrlPos 传入四个点,组成一个矩形: { x1: number, y1: number, x2: number, y2: number }
        * @returns boolean值,这个点是否在这个矩形内
        */
        ;

        _proto._judgeInArea = function _judgeInArea(pos, ctrlPos) {
          if (pos.x <= ctrlPos.x1 || pos.x >= ctrlPos.x2 || pos.y <= ctrlPos.y1 || pos.y >= ctrlPos.y2) return false;else return true;
        };

        _proto.offAllEvents = function offAllEvents() {
          this.node.off(Input.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
        };

        _proto.preview = function preview() {
          var _this2 = this; // cc.TweenSystem.pauseAll();


          tween(this.CCCamera.node).to(2, {
            position: v3(0, 7, 20),
            rotation: Quat.fromEuler(quat(), -22, 0, 0)
          }).call(function () {
            _this2.canPlay = false;
          }).start();
        };

        _proto.play = function play() {
          var _this3 = this; // cc.TweenSystem.pauseAll();
          // 获取屏幕


          if (!this.hasGetTouch) {
            this.hasGetTouch = true;
            var p1 = this.CCCamera.getComponent(Camera).worldToScreen(v3(5 / 2, -3.5 / 2, 5 / 2)); //1

            var p2 = this.CCCamera.getComponent(Camera).worldToScreen(v3(5 / 2, 3.5 / 2, -5 / 2));
            var p3 = this.CCCamera.getComponent(Camera).worldToScreen(v3(-5 / 2, -3.5 / 2, 5 / 2)); //3
            // let p4=this.CCCamera.getComponent(cc.Camera).worldToScreen(cc.v3(-5/2,-3.5/2,-5/2));

            var w = p3.x - p1.x;
            var h = p2.y - p1.y + (p3.y - p2.y) / 2;
            var centerX = p1.x + p3.x / 2; // this.node.setPosition();
            // this.node.getComponent(cc.UITransform).setContentSize(new cc.Size());
          }

          tween(this.CCCamera.node).to(2, {
            position: v3(0, 17, 5.5),
            rotation: Quat.fromEuler(quat(), -80, 0, 0)
          }).call(function () {
            _this3.canPlay = true;
          }).start();
        };

        _proto.showXL = function showXL() {
          var isShow = !this.lb.node.active;
          this.lb.node.active = isShow;

          if (isShow) {
            this.lb.show(this.curToggle);
          }
        };

        _proto.changeToggle = function changeToggle(e, customEventData) {
          this.curToggle = Number(customEventData);
        };

        return Game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BasketNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MainLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CCCamera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "basketPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "noYesNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "myList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wallPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "GameNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lb", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './sampleView.ts', './Data.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Component, sampleView, data;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      sampleView = module.sampleView;
    }, function (module) {
      data = module.data;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "20cf02pZ7pPPqOoHJ1obAeP", "Home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Home = exports('Home', (_dec = ccclass('Home'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Home, _Component);

        function Home() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "sampleView", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Home.prototype;

        _proto.onLoad = function onLoad() {
          this.sampleView.active = false;
        };

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.clickMain = function clickMain() {
          data.initListCategory(function () {
            director.loadScene("Main");
          });
        };

        _proto.clickExample = function clickExample() {
          // this.sampleView.active=true;
          this.sampleView.getComponent(sampleView).initView();
        };

        return Home;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sampleView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Item.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _createClass, cclegacy, assetManager, Mesh, MeshRenderer, BoxCollider, v3, RigidBody, Quat, quat, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      Mesh = module.Mesh;
      MeshRenderer = module.MeshRenderer;
      BoxCollider = module.BoxCollider;
      v3 = module.v3;
      RigidBody = module.RigidBody;
      Quat = module.Quat;
      quat = module.quat;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a6196jMAxdJOp91Psa7n+Cg", "Item", undefined);

      var _cc$_decorator = _decorator,
          ccclass = _cc$_decorator.ccclass,
          property = _cc$_decorator.property;
      var Item = exports('Item', (_dec = ccclass('Item'), _dec(_class = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(Item, _cc$Component);

        function Item() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _this.canReciveTouchEvent = true;
          _this._itemId = 0;
          _this._modelData = null;
          _this._meshPath = '';
          _this._itemMesh = null;
          _this._itemMaterial = null;
          _this._itemSize = {
            x: 0,
            y: 0,
            z: 0
          };
          return _this;
        }

        var _proto = Item.prototype;

        _proto.init = function init(id) {
          return;
        };

        _proto._initProperties = function _initProperties() {};

        _proto._initModelData = function _initModelData() {
          this._meshPath = this._modelData.meshPath;
          this._itemSize.x = this._modelData.x;
          this._itemSize.y = this._modelData.y;
          this._itemSize.z = this._modelData.z;
        };

        _proto._initItemMesh = function _initItemMesh() {
          var _this2 = this;

          var SBXModelBundle = assetManager.getBundle("SBXModel");
          this._itemMesh = SBXModelBundle.get(this._meshPath, Mesh);
          var MeshRenderer$1 = this.node.getComponent(MeshRenderer);

          if (!this._itemMesh) {
            SBXModelBundle.load(this._meshPath, Mesh, function (err, res) {
              _this2._itemMesh = res;
              MeshRenderer$1.mesh = _this2._itemMesh;
            });
          } else {
            MeshRenderer$1.mesh = this._itemMesh;
          }
        }
        /**初始化模型参数,材质,大小,位置 */
        ;

        _proto._initModel = function _initModel() {
          this.node.setScale(1, 1, 1);
          this.node.getComponent(MeshRenderer).materials = [this._itemMaterial];
          this.node.getComponent(BoxCollider).size = v3(this._itemSize.x, this._itemSize.y, this._itemSize.z);
        };

        _proto.onChoose = function onChoose() {
          this.node.setScale(1.2, 1.2, 1.2);
          var RigidBody$1 = this.node.getComponent(RigidBody);
          RigidBody$1.useGravity = false;
          this.node.setPosition(this.node.position.add(v3(0, 2, 0)));
        };

        _proto.onUnchoose = function onUnchoose(velocity) {
          this.node.setScale(1, 1, 1);
          var RigidBody$1 = this.node.getComponent(RigidBody);
          RigidBody$1.useGravity = true;
          velocity && RigidBody$1.setLinearVelocity(velocity);
        };

        _proto.hideCollider = function hideCollider() {
          var RigidBody$1 = this.node.getComponent(RigidBody);
          var BoxCollider$1 = this.node.getComponent(BoxCollider);
          RigidBody$1.useGravity = false;
          RigidBody$1.setLinearVelocity(v3(0, 0, 0));
          BoxCollider$1.enabled = false;
          RigidBody$1.enabled = false;
          this.node.setPosition(0, 0, 0);
          this.node.setRotation(Quat.fromEuler(quat(), 0, 0, 0));
        };

        _proto.showCollider = function showCollider() {
          this.node.getComponent(BoxCollider).enabled = true;
          this.node.getComponent(RigidBody).enabled = true;
        };

        _createClass(Item, [{
          key: "itemId",
          get: function get() {
            return this._itemId;
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          }
        }]);

        return Item;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ItemView.ts', './Data.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Material, instantiate, isValid, Component, ItemView, data;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Material = module.Material;
      instantiate = module.instantiate;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      ItemView = module.ItemView;
    }, function (module) {
      data = module.data;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "922f46nsMRFvr19mv8NlhIi", "ItemList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ItemList = exports('ItemList', (_dec = ccclass('ItemList'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property([Material]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemList, _Component);

        function ItemList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemViewPerfab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "materials", _descriptor3, _assertThisInitialized(_this));

          _this.curItemId = -1;
          _this.selectNode = null;
          _this.initIndex = 0;
          _this.hadStart = false;
          return _this;
        }

        var _proto = ItemList.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.content.removeAllChildren();
          this.scheduleOnce(function () {
            _this2.hadStart = true;
          }, 1);
        };

        _proto.update = function update(dt) {
          // if(!this.hadStart)return;
          if (this.initIndex >= data.tList.length) return;
          var item = data.tList[this.initIndex];
          var node = instantiate(this.itemViewPerfab);
          var comp = node.getComponent(ItemView);
          comp.initView(this.initIndex, item);
          comp.myList = this;
          node.setPosition(0, 0, 0);
          this.content.addChild(node);
          this.initIndex++;
        };

        _proto.updateList = function updateList(type, value) {
          for (var i = 0; i < this.content.children.length; i++) {
            console.warn(this.content.children.length);
            console.warn(data.tList[i].ori, value);

            if (type == 1) {
              this.content.children[i].active = data.tList[i].ori == value;
            } else if (type == 2) {
              this.content.children[i].active = data.tList[i].colors.includes(value);
            } else if (type == 2) {
              this.content.children[i].active = data.tList[i].size == value;
            }
          }
        };

        _proto.selectItem = function selectItem(item) {
          if (isValid(this.selectNode)) this.selectNode.setPosition(this.selectNode.position.x, this.selectNode.position.y - 50, 0);
          this.curItemId = item.itemId;
          this.selectNode = item.node;
          if (isValid(this.selectNode)) this.selectNode.setPosition(this.selectNode.position.x, this.selectNode.position.y + 50, 0);
        };

        return ItemList;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemViewPerfab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "materials", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ItemView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, LabelComponent, SpriteFrame, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      LabelComponent = module.LabelComponent;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "84a46q8eqZA27gigSE8TD9r", "ItemView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ItemView = exports('ItemView', (_dec = ccclass('ItemView'), _dec2 = property(Sprite), _dec3 = property(LabelComponent), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemView, _Component);

        function ItemView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "picNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nameLab", _descriptor2, _assertThisInitialized(_this));

          _this.myList = null;
          _this.itemId = -1;
          return _this;
        }

        var _proto = ItemView.prototype;

        _proto.initView = function initView(id, item) {
          var _this2 = this;

          this.scheduleOnce(function () {
            _this2.nameLab.string = item.name;

            _this2.nameLab.updateRenderData(true);

            _this2.itemId = id;
            if (item.pic instanceof SpriteFrame) _this2.picNode.spriteFrame = item.pic;
          });
        };

        _proto.select = function select() {
          this.myList.selectItem(this);
        };

        return ItemView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/kvItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "ef8891VhENImq25a3DDRtwY", "kvItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var kvItem = exports('kvItem', (_dec = ccclass('kvItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(kvItem, _Component);

        function kvItem() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = kvItem.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return kvItem;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./Data.ts', './Basket.ts', './Game.ts', './Item.ts', './ItemList.ts', './ItemView.ts', './Main.ts', './MoveGame.ts', './XLItem.ts', './Xllb.ts', './Home.ts', './kvItem.ts', './sampleItem.ts', './sampleView.ts', './dweb_player.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "55f3761lydP46czUsrkJnEV", "Main", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);

        function Main() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "itemRoot", _descriptor, _assertThisInitialized(_this));

          _this.touchStartPos = void 0;
          _this.touchSensitivity = 0.5;
          return _this;
        }

        var _proto = Main.prototype;

        _proto.start = function start() {};

        _proto.onLoad = function onLoad() {
          // 监听触摸或鼠标事件
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.update = function update(deltaTime) {};

        _proto.clcikNew = function clcikNew() {
          var node = new Node(); // node.addComponent
        };

        _proto.onTouchStart = function onTouchStart(event) {// 记录触摸或鼠标按下的位置
          // this.touchStartPos = event.getLocation();
        };

        _proto.onTouchMove = function onTouchMove(event) {// this.itemRoot.angle
        };

        _proto.onDestroy = function onDestroy() {
          // 解除事件监听
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.backHome = function backHome() {
          director.loadScene("Home");
        };

        return Main;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveGame.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import * as cc from "cc";
      cclegacy._RF.push({}, "fbfbbIxKARKOrAoq3ZeVvt1", "MoveGame", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/sampleItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, LabelComponent, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      LabelComponent = module.LabelComponent;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "8df9cF78g1F3p2lFqb3TzOA", "sampleItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var sampleItem = exports('sampleItem', (_dec = ccclass('sampleItem'), _dec2 = property(Sprite), _dec3 = property(LabelComponent), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(sampleItem, _Component);

        function sampleItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "picNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nameLab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = sampleItem.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.initView = function initView(name, pic) {
          var _this2 = this;

          this.scheduleOnce(function () {
            _this2.nameLab.string = name;

            _this2.nameLab.updateRenderData(true);

            _this2.picNode.spriteFrame = pic;
          });
        };

        return sampleItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/sampleView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './sampleItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, SpriteFrame, instantiate, Component, sampleItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      sampleItem = module.sampleItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "6df49XBoJ9M35hJPuIfVgFL", "sampleView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var sampleView = exports('sampleView', (_dec = ccclass('sampleView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(sampleView, _Component);

        function sampleView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemView", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "detailsView", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "kvItem", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = sampleView.prototype;

        _proto.start = function start() {};

        _proto.close = function close() {
          this.node.active = false;
        };

        _proto.initView = function initView(itemList) {
          var _this2 = this;

          this.content.removeAllChildren();
          assetManager.loadBundle('texture', function (err, bundle) {
            if (err) {
              console.error('Failed to load bundle:', err);
              return;
            }

            bundle.loadDir('example', function (err, assets) {
              if (err) {
                console.error('Failed to load directory:', err);
                return;
              }

              var spriteFrames = assets.filter(function (asset) {
                return asset instanceof SpriteFrame;
              }); // 遍历 spriteFrames 数组，处理每个 SpriteFrame

              for (var i = 0; i < spriteFrames.length; i++) {
                var spriteFrame = spriteFrames[i]; // 在此处处理 spriteFrame 的逻辑

                var node = instantiate(_this2.itemView);
                var comp = node.getComponent(sampleItem);
                comp.initView("" + spriteFrame.name, spriteFrame);

                _this2.content.addChild(node); // 示例：打印 SpriteFrame 的名称


                if (i == spriteFrames.length - 1) _this2.node.active = true;
              }
            });
          });
          return;
        };

        return sampleView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "detailsView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "kvItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XLItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, LabelComponent, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      LabelComponent = module.LabelComponent;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "c7d69H5ZM1HhJYHiAXAKIip", "XLItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var XLItem = exports('XLItem', (_dec = ccclass('XLItem'), _dec2 = property(LabelComponent), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XLItem, _Component);

        function XLItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.type = null;
          _this.value = null;
          _this.lb = null;

          _initializerDefineProperty(_this, "nameLab", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = XLItem.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.init = function init(type, value, lb) {
          var _this2 = this;

          this.scheduleOnce(function () {
            _this2.nameLab.string = value;

            _this2.nameLab.updateRenderData(true);
          });
          this.type = type;
          this.value = value;
          this.lb = lb;
        };

        _proto.click = function click() {
          this.lb.updateList(this.type, this.value);
        };

        return XLItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Xllb.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Data.ts', './XLItem.ts', './ItemList.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, LabelComponent, instantiate, Component, data, XLItem, ItemList;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      LabelComponent = module.LabelComponent;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      data = module.data;
    }, function (module) {
      XLItem = module.XLItem;
    }, function (module) {
      ItemList = module.ItemList;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "1cf78aFrS1CPYglZi2aWJN7", "Xllb", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Xllb = exports('Xllb', (_dec = ccclass('Xllb'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(ItemList), _dec5 = property(Node), _dec6 = property(LabelComponent), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Xllb, _Component);

        function Xllb() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "item", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "list", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "view", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nameLab", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Xllb.prototype;

        _proto.start = function start() {
          this.initView();
        };

        _proto.update = function update(deltaTime) {};

        _proto.initView = function initView() {
          this.node.active = false;

          for (var _iterator = _createForOfIteratorHelperLoose(data.oriMap.keys()), _step; !(_step = _iterator()).done;) {
            var key = _step.value;
            var node = instantiate(this.item);
            var comp = node.getComponent(XLItem);
            comp.init(1, key, this);
            node.setPosition(0, 0, 0);
            this.content.addChild(node);
            node.active = false;
          }

          for (var _iterator2 = _createForOfIteratorHelperLoose(data.sizeMap.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var _key2 = _step2.value;

            var _node = instantiate(this.item);

            var _comp = _node.getComponent(XLItem);

            _comp.init(3, _key2, this);

            _node.setPosition(0, 0, 0);

            this.content.addChild(_node);
            _node.active = false;
          }

          for (var _iterator3 = _createForOfIteratorHelperLoose(data.colorsMap.keys()), _step3; !(_step3 = _iterator3()).done;) {
            var _key3 = _step3.value;

            var _node2 = instantiate(this.item);

            var _comp2 = _node2.getComponent(XLItem);

            _comp2.init(2, _key3, this);

            _node2.setPosition(0, 0, 0);

            this.content.addChild(_node2);
            _node2.active = false;
          }
        };

        _proto.show = function show(type) {
          for (var i = 0; i < this.content.children.length; i++) {
            var comp = this.content.children[i].getComponent(XLItem);
            comp.node.active = comp.type == type;
          }
        };

        _proto.updateList = function updateList(type, value) {
          this.nameLab.string = value;
          this.nameLab.updateRenderData(true);
          this.node.active = false;
          this.list.updateList(type, value);
        };

        return Xllb;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "list", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});