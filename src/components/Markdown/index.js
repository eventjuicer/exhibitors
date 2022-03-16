import React, {createElement} from 'react';
import {useTranslate} from 'react-admin'

import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles';
import EmbedPostImage from './EmbedPostImage'
import EmbedSection from './EmbedSection'
import cn from 'classnames'
import { resizeCloudinaryImage, useDates } from '../../helpers';


// const urlShortener = (url) => {

//     url = url.replace(/(^\w+:|^)\/\//, '');
//     url = url.substr(0, 20)

//     return `${url}...`
// }

const renderers = ({id, images, cover, ...other}) => ({

    image: (data) => {

        const {alt, node: {url} } = data;

        if(url === cover){
            return null;
        }

        return <img src={resizeCloudinaryImage(url, 1000, 1000)} alt="" style={{width: "100%"}} />;
    },

    link: ({href, node, children}) => {

        if(href.indexOf("vimeo")>-1 || href.indexOf("youtu")>-1){
            return <EmbedSection data={href} playerProps={{
                light: false,
                playing: false,
                loop: false,
            }} />
        }

        // if(EmbedTwitterRegexp.test(href)){
        //     return <EmbedTwitter href={href} />
        // }

        return <a href={href} target="_blank">{children}</a>

    },

    html: ({value, children, ...rest}) => {
        if(value === "</data-image>"){
            return null;
        }

        if(value.indexOf("<data-image")===0){
            const {groups} = /id\=(["'])(?<id>.*?[^\\])\1/.exec(value)
            return <EmbedPostImage post_id={id} images={images} id={groups.id} />
        }
    
        return value;
    },
})

const useStyles = ({fontSize}) => makeStyles(theme => ({
    root : {
        fontSize: theme.typography.pxToRem(fontSize),
        fontWeight: 400,
        fontFamily: theme.typography.fontFamily,
        lineHeight: theme.typography.pxToRem(28),
        textAlign: "left",

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(fontSize*0.90),
        },

        "& blockquote": {
            fontSize: "120%",
            fontWeight: 500
        }
    },
    post: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 400,
        fontFamily: theme.typography.fontFamily,
        lineHeight: theme.typography.pxToRem(32),

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(17),
        },

        "& blockquote": {
            fontSize: "120%",
            fontWeight: 500
        }
    },

}))

const Markdown = ({fontSize=17, label = null, children, rendererData = null, big = false}) => {
    const translate = useTranslate();
    const dates = useDates()
    const classes = useStyles({fontSize})();
    return <div className={cn(classes.root, {
        [classes.post]: big
    })}>
    <ReactMarkdown children={label ? translate(label) : children} components={rendererData? renderers(rendererData): undefined } />
    </div>
}

 
export default Markdown