import React from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';

const NextShare = ({ shareLink }) => {
    return (
        <div className='flex gap-2'>
            <WhatsappShareButton
                url={shareLink}
                title={'Follow us on WhatsApp to get the latest updates and news.'}
            >
                <WhatsappIcon size={28} round />
            </WhatsappShareButton>
            <FacebookShareButton
                url={shareLink}
                quote={'Follow us on Facebook to get the latest updates and news.'}
            >
                <FacebookIcon size={28} round />
            </FacebookShareButton>
            <TelegramShareButton
                url={shareLink}
                title={'Follow us on Telegram to get the latest updates and news.'}
            >
                <TelegramIcon size={28} round />
            </TelegramShareButton>
            <TwitterShareButton url={shareLink} title={'Follow us on Twitter to get the latest updates and news.'}>
                <TwitterIcon size={28} round />
            </TwitterShareButton>
            <LinkedinShareButton
                url={shareLink}
                title={'Follow us on LinkedIn to get the latest updates and news.'}
            >
                <LinkedinIcon size={28} round />
            </LinkedinShareButton>
        </div>
    )
}

export default NextShare