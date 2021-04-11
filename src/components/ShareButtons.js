import React from 'react'
<<<<<<< HEAD
import {
  FacebookShareButton,
  FacebookIcon,
=======

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
<<<<<<< HEAD
=======
  RedditShareButton,
  RedditIcon
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div>
          <FacebookShareButton url={url} >
<<<<<<< HEAD
                <FacebookIcon  size={35} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={35} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={35} round={true}/>
=======
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
>>>>>>> 2fc743038e36c42dd787fbe8c4aaf049f4f09a93
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons