const copiar = (ref) => {
    ref.current.select();
    ref.current.setSelectionRange(0,99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    ref.current.blur();
}

export default copiar;