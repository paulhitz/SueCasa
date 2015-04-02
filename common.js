/**
 * Common JavaScript functions for www.suecasa.net
 *
 * @author Paul Hitz
 * @version 061219
 */


var mail_to = "&#109;&#97;&#105;&#108;&#116;&#111;&#58;";
var user = "&#115;&#117;&#101;&#46;&#115;&#117;&#101;&#99;&#97;&#115;&#97;";
var at = "&#64;";
var domain = "&#103;&#109;&#97;&#105;&#108;";
var dot = "&#46;";
var suffix = "&#99;&#111;&#109;";

/**
* Encode each character of the email address. This can potentially defeat 
* email-grabbing spiders since they are probably not javascript enabled.
*
* @return The encoded email address.
*/
function generateEmailAddress()
{
    return mail_to + user + at + domain + dot + suffix;
}
