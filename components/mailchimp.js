import Link from 'next/link'
import Script from 'next/script'
import styles from '../src/app/styles/mailchimp.component.css';


export default function Mailchimp() {
    return (
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"></link>
            <div id="mc_embed_signup">
                <form action="https://app.us12.list-manage.com/subscribe/post?u=252cbc3ffac77bf6663812ca0&amp;id=c6566ac963&amp;f_id=00514ce0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll"><h2>Sign Up</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address: <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" ></input></div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response" ></div>
                        </div>

                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe"></input>
                                <p ><a href="http://eepurl.com/iGmqqU" title="Mailchimp - email marketing made easy and fun"></a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Script id="my-script" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" strategy="beforeInteractive" />
            <Script id="my-script-2" strategy="beforeInteractive">
                {`
                        (function($) {
                            window.fnames = new Array(); 
                            window.ftypes = new Array();
                            fnames[0]='EMAIL';
                            ftypes[0]='email';
                        }(jQuery));
                        var $mcj = jQuery.noConflict(true);
                    `}
            </Script>
        </div>
    )
}