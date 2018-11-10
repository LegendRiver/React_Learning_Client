export function checkIllegalChar(str)
{
    let pat = new RegExp("^[a-zA-Z0-9@\_]*$");
    return pat.test(str);
}
