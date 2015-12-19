
function render(req, res, next) {
    const location = createLocation(req.url);
    const routes = createRoutes();

    match({routes, location}, (error, redirectLocation, routerState) => {

        if (redirectLocation) {
            res.redirect(redirectLocation.pathname+redirectLocation.search);
        }
        else {

            getInitData(routerState).then((initData) => {
                const initDataJSON = `window.initData=${serialize(initData)};`;
                const content = ReactDOMServer.renderToString(<RoutingContext {...routerState}/>);

                // wrapp it to get access to store data
                setTimeout(() => {
                    const {title, description, pageClassName} = AppStore.getData();
                    const html = ReactDOMServer.renderToStaticMarkup(
                        <Html
                            initDataJSON={ initDataJSON }
                            content={ content }
                            title={ title }
                            pageClassName={ pageClassName }
                            description={ description }/>
                    );
                    const doctype = '<!DOCTYPE html>';
                    res.send(doctype+html);
                });
            }).catch((err) => {
                next(err);
            });

        }
    });
}

export default render;
