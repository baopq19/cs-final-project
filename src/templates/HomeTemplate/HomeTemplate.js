import { Fragment } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";


export const HomeTemplate = (props) => {
    const {Component, ...restProps} = props;

    return <Route {... restProps} render={(propsRoute) => { //props.location, props.history, props.match

        return <Fragment>
            <Header />
            

            <Component {...propsRoute} />

            <Footer />
        </Fragment>
    }} />
}