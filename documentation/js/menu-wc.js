'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccueilsModule.html" data-type="entity-link" >AccueilsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' : 'data-bs-target="#xs-controllers-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' :
                                            'id="xs-controllers-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' }>
                                            <li class="link">
                                                <a href="controllers/AccueilsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' : 'data-bs-target="#xs-injectables-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' :
                                        'id="xs-injectables-links-module-AccueilsModule-ed427c742c9c95744ca8538360060f11f37357e44cf52f64402d24b94104a278c4e781891672a3434e4dd868a5e5ce3656eefd1f8c2ddf98ffffc306b197cda1"' }>
                                        <li class="link">
                                            <a href="injectables/AccueilsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-340a97c6cfb3e98f51ab2c9e262255438b3e894eff0bba7ad1a384dff8825278992d4081abaac8c043b992b40a2a586730e7999764c102f7eec926c6d3dd37d6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-340a97c6cfb3e98f51ab2c9e262255438b3e894eff0bba7ad1a384dff8825278992d4081abaac8c043b992b40a2a586730e7999764c102f7eec926c6d3dd37d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-340a97c6cfb3e98f51ab2c9e262255438b3e894eff0bba7ad1a384dff8825278992d4081abaac8c043b992b40a2a586730e7999764c102f7eec926c6d3dd37d6"' :
                                            'id="xs-controllers-links-module-AppModule-340a97c6cfb3e98f51ab2c9e262255438b3e894eff0bba7ad1a384dff8825278992d4081abaac8c043b992b40a2a586730e7999764c102f7eec926c6d3dd37d6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' :
                                            'id="xs-controllers-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' :
                                        'id="xs-injectables-links-module-AuthModule-2999821e35d65d3af92b04ba89368b9c535772ae7e7652dfbfe26017a3616f39b386f81624b5b3963620ec7d62472b32c9d81d00318951d7d46644d9242c45c0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' :
                                            'id="xs-controllers-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' :
                                        'id="xs-injectables-links-module-UsersModule-f19df04b869ffc06b468e989f69eb2fedf4763d18d5343095849934cbee0c41dd3d2834852861d2472250d69ad4d5ed7bc4be2d04b30acaa0c6de82079b48c6d"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccueilsController.html" data-type="entity-link" >AccueilsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Accueil.html" data-type="entity-link" >Accueil</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateAccueilDto.html" data-type="entity-link" >CreateAccueilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccueilsService.html" data-type="entity-link" >AccueilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});