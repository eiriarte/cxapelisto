function seniksigu()
{
  seniksigu_cxion(content);
}

function seniksigu_cxion(framo)
{
  var i;

  // Ĉapeligi ĉefa fenestro.
  seniksigu_dokumento(framo.document);

  // Ĉapeligi ĉiujn framojn. Necesa por Gmail, aŭ Geocities, ekzemple.
    for (i = 0; i < framo.frames.length; i++)
      seniksigu_cxion(framo.frames[i]);
}

function seniksigu_dokumento(dok)
{
  var tekstoj, teksto;

  dok.title = seniksigu_cxeno(dok.title);

  if (dok.contentType.indexOf("xml") != -1)
	tekstoj = dok.evaluate( "//html:body//text()", dok, fariURI, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  else
	tekstoj = dok.evaluate( "//body//text()", dok, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

  for (var i = 0; i < tekstoj.snapshotLength; i++)
  { 
    teksto = tekstoj.snapshotItem(i); 
    teksto.data = seniksigu_cxeno(teksto.data);
  }

  tekstoj = null;
}

function seniksigu_cxeno(cxeno)
{
  var s;
  s = cxeno;

  // Forigi ikso-sistemon
  s = s.replace(/S[Xx]/g,"\u015C");
  s = s.replace(/s[Xx]/g,"\u015D");
  s = s.replace(/C[Xx]/g,"\u0108");
  s = s.replace(/c[Xx]/g,"\u0109");
  s = s.replace(/G[Xx]/g,"\u011C");
  s = s.replace(/g[Xx]/g,"\u011D");
  s = s.replace(/H[Xx]/g,"\u0124");
  s = s.replace(/h[Xx]/g,"\u0125");
  s = s.replace(/J[Xx]/g,"\u0134");
  s = s.replace(/j[Xx]/g,"\u0135");
  s = s.replace(/U[Xx]/g,"\u016C");
  s = s.replace(/u[Xx]/g,"\u016D");

  // Forigi antaŭ-ĉapelan sistemon
  s = s.replace(/\^S/g,"\u015C");
  s = s.replace(/\^s/g,"\u015D");
  s = s.replace(/\^C/g,"\u0108");
  s = s.replace(/\^c/g,"\u0109");
  s = s.replace(/\^G/g,"\u011C");
  s = s.replace(/\^g/g,"\u011D");
  s = s.replace(/\^H/g,"\u0124");
  s = s.replace(/\^h/g,"\u0125");
  s = s.replace(/\^J/g,"\u0134");
  s = s.replace(/\^j/g,"\u0135");
  s = s.replace(/\^U/g,"\u016C");
  s = s.replace(/\^u/g,"\u016D");

  // Forigi post-ĉapelan sistemon
  s = s.replace(/S\^/g,"\u015C");
  s = s.replace(/s\^/g,"\u015D");
  s = s.replace(/C\^/g,"\u0108");
  s = s.replace(/c\^/g,"\u0109");
  s = s.replace(/G\^/g,"\u011C");
  s = s.replace(/g\^/g,"\u011D");
  s = s.replace(/H\^/g,"\u0124");
  s = s.replace(/h\^/g,"\u0125");
  s = s.replace(/J\^/g,"\u0134");
  s = s.replace(/j\^/g,"\u0135");
  s = s.replace(/U\^/g,"\u016C");
  s = s.replace(/u\^/g,"\u016D");

  return s;
}

function fariURI(prefikso) {
  if (prefikso == 'html')
    return 'http://www.w3.org/1999/xhtml';
  else
    return null;
}
