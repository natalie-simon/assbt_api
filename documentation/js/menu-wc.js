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
                                            'data-bs-target="#controllers-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' : 'data-bs-target="#xs-controllers-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' :
                                            'id="xs-controllers-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' }>
                                            <li class="link">
                                                <a href="controllers/AccueilsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' : 'data-bs-target="#xs-injectables-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' :
                                        'id="xs-injectables-links-module-AccueilsModule-a4609b862bf94e9fa193975cb2771a4397548f23f2781c3cbccb4371c08d185200dc0a0e522350adc1cd02cf9897853b410b4631052964fd88cbb0d8bd5953fc"' }>
                                        <li class="link">
                                            <a href="injectables/AccueilsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' :
                                            'id="xs-controllers-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' :
                                        'id="xs-injectables-links-module-AuthModule-611d150e26f2db6850cadcda0d15dc206669bc2e80dd70d88ba7093a8ab2dfe70fb2c83571f923fc4eb772db32e1e5987f24f580456576a950220fe0dd45fb39"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' :
                                            'id="xs-controllers-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' :
                                        'id="xs-injectables-links-module-UsersModule-f9f25fe78f4bd8611f48f03ede5bdcb0bd9bd301e00f0f17440c50e0c8cd2b197c68b99e4fba19271d0b2241e844d031a0bf95afb5448cc6a73b6491d627c7d3"' }>
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