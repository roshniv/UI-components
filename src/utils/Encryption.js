class Encryption {

    encodeHTML(str) {
        str = str.replace(/&/g, '&amp;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');
        str = str.replace(/</g, '&lt;');
        str = str.replace(/>/g, '&gt;');
        return str;
    }

    decodeHTML(str) {
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&quot;/g, '"');
        str = str.replace(/&#039;/g, '\'');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        return str;
    }

}

export default new Encryption();
