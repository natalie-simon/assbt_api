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
                                            'data-bs-target="#controllers-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' : 'data-bs-target="#xs-controllers-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' :
                                            'id="xs-controllers-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' }>
                                            <li class="link">
                                                <a href="controllers/AccueilsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' : 'data-bs-target="#xs-injectables-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' :
                                        'id="xs-injectables-links-module-AccueilsModule-9ac9a405d0f72144f8e684175a3566e00c21d2d281920f5540b4c20dffffd002c6f0e5c4d426306b939940accb8ab417017346a514cda04e97061ef98c1da822"' }>
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
                                <a href="modules/ArticlesModule.html" data-type="entity-link" >ArticlesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' : 'data-bs-target="#xs-controllers-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' :
                                            'id="xs-controllers-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' }>
                                            <li class="link">
                                                <a href="controllers/ArticlesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' : 'data-bs-target="#xs-injectables-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' :
                                        'id="xs-injectables-links-module-ArticlesModule-f4fdf989e9fa3e6e3b9de236415e91e05936c86a43b58b2f4125790b37fc6aba4b3f554aa5e63f1b0a3bd04434a200eb1a21f35f5518aae60547d3c132a9803c"' }>
                                        <li class="link">
                                            <a href="injectables/ArticlesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlesService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="modules/CategoriesArticlesModule.html" data-type="entity-link" >CategoriesArticlesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' : 'data-bs-target="#xs-controllers-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' :
                                            'id="xs-controllers-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesArticlesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesArticlesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' : 'data-bs-target="#xs-injectables-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' :
                                        'id="xs-injectables-links-module-CategoriesArticlesModule-497c23d160f17891dd795a73774b020f7860a0c2e466b8fb7bf3d6a81143f59a2702f267e65a4d6257fb36956c38bbd3c8123538f2700666b6c5a1768ad1eecd"' }>
                                        <li class="link">
                                            <a href="injectables/CatetogiesArticlesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatetogiesArticlesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatutsModule.html" data-type="entity-link" >StatutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' : 'data-bs-target="#xs-controllers-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' :
                                            'id="xs-controllers-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' }>
                                            <li class="link">
                                                <a href="controllers/StatutsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatutsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' : 'data-bs-target="#xs-injectables-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' :
                                        'id="xs-injectables-links-module-StatutsModule-313f0508707c3b4579fc296e86702b02c8cc78e594853b6269c5e6a96cd0f74456370d186631aa8aa6d34bf15dab926e6afb30b9c392400ec07674678fa74143"' }>
                                        <li class="link">
                                            <a href="injectables/StatutsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatutsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' :
                                            'id="xs-controllers-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' :
                                        'id="xs-injectables-links-module-UsersModule-5cad5b768a9ca5a7ea3c7294a41197890309058a5189d83e7a2d3f19e687f6746648f4560d1a29cbc798120d62059011a1b599af2e5d8ceaedf44b78e43a924b"' }>
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
                                    <a href="controllers/ArticlesController.html" data-type="entity-link" >ArticlesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesArticlesController.html" data-type="entity-link" >CategoriesArticlesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StatutsController.html" data-type="entity-link" >StatutsController</a>
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
                                    <a href="entities/Article.html" data-type="entity-link" >Article</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CategorieArticle.html" data-type="entity-link" >CategorieArticle</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Statut.html" data-type="entity-link" >Statut</a>
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
                                <a href="classes/CategoriesAriclesServiceMock.html" data-type="entity-link" >CategoriesAriclesServiceMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccueilDto.html" data-type="entity-link" >CreateAccueilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticleDto.html" data-type="entity-link" >CreateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategorieArticleDto.html" data-type="entity-link" >CreateCategorieArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStatutDto.html" data-type="entity-link" >CreateStatutDto</a>
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
                                    <a href="injectables/ArticlesService.html" data-type="entity-link" >ArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatetogiesArticlesService.html" data-type="entity-link" >CatetogiesArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatutsService.html" data-type="entity-link" >StatutsService</a>
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