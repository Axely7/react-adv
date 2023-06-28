import { lazy, LazyExoticComponent } from "react";
import {FormikAbstract, FormikBasicPage, FormikYupPage, FormikYupPageComponents, RegisterPage, RegisterFormikPage, DynamicForm} from '../03-forms/pages'

type JSXComponent = () => JSX.Element


interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))




export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/registerPage',
        path: 'registerPage',
        Component: RegisterPage,
        name: 'Register Page'
    },
    {
        to: '/formikPageBasic',
        path: 'formikPageBasic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formikPageYup',
        path: 'formikPageYup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formikComponents',
        path: 'formikComponents',
        Component: FormikYupPageComponents,
        name: 'Formik Component'
    },
    {
        to: '/FormikAbstract',
        path: 'FormikAbstract',
        Component: FormikAbstract,
        name: 'Formik Abstract'
    },
    {
        to: '/RegisterFormikPage',
        path: 'RegisterFormikPage',
        Component: RegisterFormikPage,
        name: 'Formik Register'
    },
    {
        to: '/DynamicForm',
        path: 'DynamicForm',
        Component: DynamicForm,
        name: 'Dynamic Form'
    }
]