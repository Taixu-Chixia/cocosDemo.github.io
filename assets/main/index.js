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
          this.itemList = [{
            name: "楚地",
            ori: "湖北",
            color: "黄",
            size: {
              x: 1,
              y: 0.3,
              z: 0.1
            }
          }, {
            name: "黄鹤楼",
            ori: "武汉",
            color: "红",
            size: {
              x: 0.8,
              y: 0.25,
              z: 0.12
            }
          }, {
            name: "南山",
            ori: "深圳",
            color: "蓝",
            size: {
              x: 1.2,
              y: 0.25,
              z: 0.08
            }
          }, {
            name: "江西",
            ori: "湖南",
            color: "绿",
            size: {
              x: 0.5,
              y: 0.3,
              z: 0.1
            }
          }];
        }

        Data.getInstance = function getInstance() {
          if (!Data.instance) {
            Data.instance = new Data();
          }

          return Data.instance;
        };

        return Data;
      }(), _class2.instance = void 0, _class2)) || _class));
      var data = new Data(); // default data

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

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Item.ts', './ItemList.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Node, Camera, Prefab, _decorator, v3, Input, Quat, quat, instantiate, MeshRenderer, tween, UITransform, Size, Component, ItemList;

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
      UITransform = module.UITransform;
      Size = module.Size;
      Component = module.Component;
    }, null, function (module) {
      ItemList = module.ItemList;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "6c420qPq0lOS6+dueeDZYWF", "Game", undefined);

      var _cc$_decorator = _decorator,
          ccclass = _cc$_decorator.ccclass,
          property = _cc$_decorator.property;
      var Game = exports('Game', (_dec = ccclass('Game'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Camera), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(ItemList), _dec9 = property(Prefab), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
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

        _proto.update = function update(dt) {
          if (!this.isNodeActive) return;
          this._checkDtCounter++;

          if (this._checkDtCounter === 60) {
            this._checkAllItemsPosition();

            this._checkDtCounter = 0;
          }

          if (!this._canScroll) return;

          this._onScrollUpdate();
        };

        _proto.initGame = function initGame(level) {
          this._initCamera();

          this._initMainLight();

          this.node.on(Input.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this._onTouchEnd, this);

          this._initLevelData(level);

          this._initBaskets();

          this._initItems();

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
        }
        /**初始化关卡数据 */
        ;

        _proto._initLevelData = function _initLevelData(level) {
          //这里如果是读的样例的话直接生成，也可以是读取保存的数据
          return; // this.myList.updateList(null);
          // // this._itemData = this._levelData.itemData;
          // // this._extraItemData = this._levelData.extraItemData;
          // const itemList = this._itemData.split(",");
          // this._itemKindData = [];
          // this._itemNumData = [];
          // this._curSettedItemNum = 0;
          // for (let i = 0; i < itemList.length; i++) {
          //     const list = itemList[i].split("#");
          //     const id = +list[0];
          //     const num = +list[1];
          //     this._itemKindData[i] = id;
          //     this._itemNumData[i] = num;
          // }
        };

        _proto._initItems = function _initItems() {
          // 这个是初始化物品位置 暂时不用
          return; // if (this._itemKindData.length > 0) {
          //     for (let i = 0; i < this._itemKindData.length; i++) {
          //         const id = +this._itemKindData[i];
          //         const num = +this._itemNumData[i];
          //         for (let j = 0; j < num; j++) {
          //             const item = cc.instantiate(this.itemPrefab);
          //             this._setItemOnFloor(item);
          //             this._itemNodes.push(item);
          //             item.getComponent(Item).init(id);
          //         }
          //     }
          // }
          // const extraItemList = this._extraItemData.split(",");
          // if (extraItemList.length > 0) {
          //     for (let i = 0; i < extraItemList.length; i++) {
          //         const list = extraItemList[i].split("#");
          //         const id = +list[0];
          //         const num = +list[1];
          //         for (let j = 0; j < num; j++) {
          //             const item = cc.instantiate(this.itemPrefab);
          //             this._setItemOnFloor(item);
          //             this._extraItemNodes.push(item);
          //             item.getComponent(Item).init(id);
          //         }
          //     }
          // }
        };

        _proto._setItemOnFloor = function _setItemOnFloor(node) {//这里是把物品放在篮子里 后续可以改成预制 暂时不用
          // node.setParent(this.GameNode);
          // const randx = (Math.random() - 0.5) * 10;
          // const randy = (Math.random() + 0.1) * 5;
          // const randz = (Math.random() - 0.5) * 10;
          // node.setPosition(cc.v3(randx, randy, randz));
          // const rx = Math.random() * 360;
          // const ry = Math.random() * 360;
          // const rz = Math.random() * 360;
          // node.setRotation(cc.Quat.fromEuler(cc.quat(), rx, ry, rz));
          // const RigidBody = node.getComponent(cc.RigidBody);
          // if (RigidBody) {
          //     RigidBody.useGravity = true;
          //     RigidBody.setLinearVelocity(cc.Vec3.ZERO);
          //     RigidBody.setAngularVelocity(cc.Vec3.ZERO);
          // }
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
          node.setPosition(0, -y / 2, 0); // 有多个柜台的时候用这个
          // let x = 0;
          // if (this._itemKindData.length === 1) {
          //     this.BasketNode.setPosition(0, this.BasketNode.position.y, this.BasketNode.position.z);
          // } else {
          //     this.BasketNode.setPosition(-5.5, this.BasketNode.position.y, this.BasketNode.position.z);
          // }
          // for (let i = 0; i < this._itemKindData.length; i++) {
          //     const itemId = +this._itemKindData[i];
          //     const num = +this._itemNumData[i];
          //     const basket = cc.instantiate(this.basketPrefab);
          //     this.BasketNode.addChild(basket);
          //     basket.setPosition(x, 0, 0);
          //     x += basketLen;
          //     this._basketNodes.push(basket);
          //     const BasketComp = basket.getComponent(Basket);
          //     BasketComp.init(i, itemId, num);
          //     const collider = basket.getComponent(cc.Collider);
          //     collider && collider.on("onCollisionEnter", this._onCollisionEnter, this);
          // }
        };

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
          return;
        };

        _proto._onTouchEnd = function _onTouchEnd(event) {
          return;
        };

        _proto._onTouchMove = function _onTouchMove(event) {
          return;
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {// const itemNode = event.otherCollider.node;
          // const basketNode = event.selfCollider.node;
          // const itemComp = itemNode.getComponent(Item);
          // const basketComp = basketNode.getComponent(Basket);
          // if (!itemComp || !basketComp) return;
          // if (itemComp.itemId === basketComp.itemId) {
          //     itemComp.canReciveTouchEvent = false;
          //     itemComp.hideCollider();
          //     basketComp.setOneItem(itemNode);
          //     this._curSettedItemNum++;
          // } else {
          //     if (itemComp.canReciveTouchEvent) {
          //         this._setItemOnFloor(itemNode);
          //     }
          // }
        }
        /**篮子消失 */
        ;

        _proto.setBasketDisappear = function setBasketDisappear(id) {// this._canScroll = false;
          // for (let i = id + 1; i < this._basketNodes.length; i++) {
          //     let position = cc.v3();
          //     this._basketNodes[i].getPosition(position);
          //     cc.Tween.stopAllByTarget(this._basketNodes[i]);
          //     cc.tween(this._basketNodes[i])
          //         .delay(0.4)
          //         .to(0.2, { position: position.subtract(cc.v3(basketLen, 0, 0)) })
          //         .call(() => {
          //             this._canScroll = true;
          //         })
          //         .start();
          // }
          // if (id + 1 >= this._basketNodes.length) {
          //     this._canScroll = true;
          // }
        }
        /**滑动时的Update */
        ;

        _proto._onScrollUpdate = function _onScrollUpdate() {// if (this._curScrollSpeed === 0) return;
          // const position = cc.v3();
          // this.BasketNode.getPosition(position);
          // position.x += this._curScrollSpeed;
          // if (position.x < -(basketLen * this._itemKindData.length)) {
          //     position.x = -(basketLen * this._itemKindData.length)
          // }
          // if (position.x > scrollLeft) {
          //     position.x = scrollLeft;
          // }
          // this.BasketNode.setPosition(position);
          // if (this._curScrollSpeed < 0) {
          //     this._curScrollSpeed = (this._curScrollSpeed + loseSpeed >= 0) ? 0 : this._curScrollSpeed + loseSpeed;
          // } else {
          //     this._curScrollSpeed = (this._curScrollSpeed - loseSpeed <= 0) ? 0 : this._curScrollSpeed - loseSpeed;
          // }
        };

        _proto._letGoFood = function _letGoFood() {// if (!this._touchingBallNode) return;
          // // this._touchingBallNode.getComponent(Find_Item).onUnchoose(this._velocityNow);
          // this._velocityNow = cc.v3();
          // this._touchingBallNode = null;
        };

        _proto._onScrollTouchMove = function _onScrollTouchMove(event) {// const pos = cc.v2();
          // event.getLocation(pos);
          // let pos_x = pos.x;
          // let previousPos_x = event.getPreviousLocation().x;
          // if (pos_x > previousPos_x) {
          //     //玩家向右滑
          //     if (this._curScrollSpeed >= 0) {
          //         //本来就在向右行驶或静止
          //         this._curScrollSpeed = scrollSpeed;
          //     } else {
          //         this._curScrollSpeed = 0;
          //     }
          // } else {
          //     //玩家向左滑
          //     if (this._curScrollSpeed <= 0) {
          //         //本来就在向左行驶或静止
          //         this._curScrollSpeed = -scrollSpeed;
          //     } else {
          //         this._curScrollSpeed = 0;
          //     }
          // }
        }
        /**检查物体位置有无异常 */
        ;

        _proto._checkAllItemsPosition = function _checkAllItemsPosition() {// for (let i = 0; i < this._itemNodes.length; i++) {
          //     const node = this._itemNodes[i];
          //     const comp = node.getComponent(Item);
          //     if (!comp.canReciveTouchEvent) continue;
          //     let shouldReset = this._checkNodePosition(node);
          //     if (shouldReset) {
          //         this._setItemOnFloor(node);
          //     }
          // }
          // for (let i = 0; i < this._extraItemNodes.length; i++) {
          //     const node = this._extraItemNodes[i];
          //     const comp = node.getComponent(Item);
          //     if (!comp.canReciveTouchEvent) continue;
          //     let shouldReset = this._checkNodePosition(node);
          //     if (shouldReset) {
          //         this._setItemOnFloor(node);
          //     }
          // }
        };

        _proto._checkNodePosition = function _checkNodePosition(node) {// let shouldReset: boolean = false;
          // if (node.position.x < -10) {
          //     // SBX_Logger.log("检测到有物体位置过左");
          //     shouldReset = true;
          // }
          // if (node.position.y < 0) {
          //     // SBX_Logger.log("检测到有物体位置过下");
          //     shouldReset = true;
          // }
          // if (node.position.z < -15) {
          //     // SBX_Logger.log("检测到有物体位置过后");
          //     shouldReset = true;
          // }
          // if (node.position.x > 10) {
          //     // SBX_Logger.log("检测到有物体位置过右");
          //     shouldReset = true;
          // }
          // if (node.position.y > 20) {
          //     // SBX_Logger.log("检测到有物体位置过上");
          //     shouldReset = true;
          // }
          // if (node.position.z > 13) {
          //     // SBX_Logger.log("检测到有物体位置过前");
          //     shouldReset = true;
          // }
          // return shouldReset;
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

            this.node.getComponent(UITransform).setContentSize(new Size());
          }

          tween(this.CCCamera.node).to(2, {
            position: v3(0, 17, 5.5),
            rotation: Quat.fromEuler(quat(), -80, 0, 0)
          }).call(function () {
            _this3.canPlay = true;
          }).start();
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
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
          director.loadScene("Main");
        };

        _proto.clickExample = function clickExample() {
          this.sampleView.active = true;
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

System.register("chunks:///_virtual/ItemList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ItemView.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Material, UITransform, instantiate, isValid, Component, ItemView;

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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      ItemView = module.ItemView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "922f46nsMRFvr19mv8NlhIi", "ItemList", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var itemListArr = [{
        name: "楚地",
        ori: "湖北",
        color: "黄",
        size: {
          x: 1,
          y: 0.3,
          z: 0.1
        }
      }, {
        name: "黄鹤楼",
        ori: "武汉",
        color: "红",
        size: {
          x: 0.8,
          y: 0.25,
          z: 0.12
        }
      }, {
        name: "南山",
        ori: "深圳",
        color: "蓝",
        size: {
          x: 1.2,
          y: 0.25,
          z: 0.08
        }
      }, {
        name: "江西",
        ori: "湖南",
        color: "绿",
        size: {
          x: 0.5,
          y: 0.3,
          z: 0.1
        }
      }];
      var ItemList = exports('ItemList', (_dec = ccclass('ItemList'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property([Material]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemList, _Component);

        function ItemList() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemView", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "materials", _descriptor3, _assertThisInitialized(_this));

          _this.curItemId = -1;
          _this.selectNode = null;
          return _this;
        }

        var _proto = ItemList.prototype;

        _proto.start = function start() {
          this.content.removeAllChildren();

          for (var i = 0; i < itemListArr.length; i++) {
            console.warn(i, this.content.getComponent(UITransform).width);
            var node = instantiate(this.itemView);
            var comp = node.getComponent(ItemView);
            comp.initView(i, itemListArr[i].name, null);
            comp.myList = this;
            node.setPosition(0, 0, 0);
            this.content.addChild(node);
          }
        };

        _proto.updateList = function updateList(itemList) {
          this.content.removeAllChildren();

          for (var i = 0; i < itemListArr.length; i++) {
            var node = instantiate(this.itemView);
            var comp = node.getComponent(ItemView);
            comp.initView(i, itemListArr[i].name, null);
            comp.myList = this;
            node.setPosition(0, 0, 0);
            this.content.addChild(node);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemView", [_dec3], {
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

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Component;

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
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "84a46q8eqZA27gigSE8TD9r", "ItemView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ItemView = exports('ItemView', (_dec = ccclass('ItemView'), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
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

        _proto.initView = function initView(id, name, pic) {
          console.warn(name, this.nameLab);
          this.nameLab.string = name;
          this.itemId = id;
          if (!pic) return;
          this.picNode.spriteFrame = pic;
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

System.register("chunks:///_virtual/main", ['./Data.ts', './Basket.ts', './Game.ts', './Item.ts', './ItemList.ts', './ItemView.ts', './Main.ts', './Home.ts', './kvItem.ts', './sampleItem.ts', './sampleView.ts', './dweb_player.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
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

System.register("chunks:///_virtual/sampleItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, Component;

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
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "8df9cF78g1F3p2lFqb3TzOA", "sampleItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var sampleItem = exports('sampleItem', (_dec = ccclass('sampleItem'), _dec2 = property(Sprite), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          this.nameLab.string = name;
          this.picNode.spriteFrame = pic;
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

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Component, sampleItem;

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
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      sampleItem = module.sampleItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "6df49XBoJ9M35hJPuIfVgFL", "sampleView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var sampleView = exports('sampleView', (_dec = ccclass('sampleView'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(sampleView, _Component);

        function sampleView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemView", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = sampleView.prototype;

        _proto.start = function start() {};

        _proto.close = function close() {
          this.node.active = false;
        };

        _proto.initView = function initView(itemList) {
          this.content.removeAllChildren();

          for (var i = 0; i < itemList; i++) {
            var node = instantiate(this.itemView);
            var comp = node.getComponent(sampleItem);
            comp.initView("" + i, null);
            this.content.addChild(node);
          }
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