// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Earth API library for Maps v3.
 * usage:  var ge = new GoogleEarth(map);.
 * @author jlivni@google.com (Josh Livni).
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('b a(u,43){g(!j||!j.S){1P\'j.S 2F 5v\';}g(!j.S.6h()){1P\'33 1V 2d 3s 2F 5U 3r 7 3o\';}g(!j.S.5T()){1P\'33 1V 2d 3s 2F 5B 3r 7 3o\';}7.4f=\'5P://r.j.6c/5F/1a/5V/5W-P.6D\';7.m=u;7.2P=u.5K();7.1y=2u;7.23=\'1V\';7.30=[];7.C={};7.2r=22;7.3p=43;7.2M=0;7.4k();7.4C()}1o[\'a\']=a;a.1n=\'57\';a[\'1n\']=a.1n;a.2a=\'5C\';a.2c=27;a.d.2e=b(){p 7.n};a.d[\'2e\']=a.d.2e;a.d.4k=b(){8 u=7.m;8 3u=({5X:20 j.r.6i(4j,4j),4U:19,4X:7.23,1r:7.23,5h:b(5m,1u,4Q){8 3g=4Q.1v(\'1Z\');p 3g}});u.O.29(a.1n,3u);g(7.3p){8 1D=7.m.3v.1D;1D.1Y(a.1n);8 4c=({3v:{1D:1D}});u.61(4c)}8 l=7;j.r.K.1X(u,\'6G\',b(){l.4F()})};a.d.4F=b(){g(7.m.4W()==a.1n){7.4M()}A{7.3f()}};a.d.4M=b(){8 I=7.3h();g(I){7.3l(I);7.3m(I)}7.Q.f.2S=\'\';7.1y=1j;g(!7.n){7.3t();p}7.31()};a.d.31=b(){7.C={};7.32(1j);7.3C();7.2M++;7.3T();7.3U()};a.d.3T=b(){o(8 i=0,36;36=7.30[i];i++){j.r.K.6v(36)}};a.d.3C=b(){8 1U=7.n.X();6H(1U.4m()){1U.4t(1U.4m())}};a.d.32=b(4y){8 Z=7.m.4D();8 x=7.n.5j(\'\');8 1F=s.5w(2,a.2c-7.m.3e());x.5D(1F);x.2g(Z.y());x.2s(Z.w());x.5R(0);x.5S(0);8 c=7.n;g(4y){c.2K().2L(5);c.1R().2N(x);x.5Y(15);c.2K().2L(0.5Z);1o.1s(b(){c.1R().2N(x)},6a);1o.1s(b(){c.2K().2L(1)},6g)}A{c.1R().2N(x)}};a.2U=b(12,N){g(12[0]==\'#\'){12=12.1Q(1,9)}g(1p N==\'U\'){N=\'6I\'}A{N=6J(6K(N)*6Q,10).6S(16);g(N.6U==1){N=\'0\'+N}}8 R=12.1Q(0,2);8 G=12.1Q(2,4);8 B=12.1Q(4,6);8 4i=[N,B,G,R].58(\'\');p 4i};a.d.37=b(k){8 H=7.2M+\'5n\'+k[\'E\'];p H};a.d.1e=b(k){8 H=7.37(k);7.C[H]=k;p 7.n.5A(H)};a.d.4A=b(14){8 c=7.n;8 1i=14.4E();8 J=1i.4G();8 Y=1i.4N();8 h=7.1e(14);h.1z(c.2A(\'\'));8 1d=c.2I(\'\');8 f=7.1A(14);h.1B(f);8 F=1d.1O();F.T(J.y(),J.w(),0);F.T(J.y(),Y.w(),0);F.T(Y.y(),Y.w(),0);F.T(Y.y(),J.w(),0);F.T(J.y(),J.w(),0);h.2R().26(1d);h.2T(\'h\');c.X().L(h)};a.d.3x=b(2V){8 1i=2V.4E();8 J=1i.4G();8 Y=1i.4N();8 c=7.n;8 k=c.6j(\'\');k.6q(c.6s(\'\'));8 3E=k.6B();3E.6C(J.y(),Y.y(),J.w(),Y.w(),0);k.3Q(c.3S(\'\'));k.2X().2Y(2V.3X());c.X().L(k)};a.d.3Z=b(41){8 c=7.n;j.S.6L(c,41,b(1a){g(!1a){1o.1s(b(){6M(\'6N 6O 22 6P.\')},0);p}c.X().L(1a)})};a.d.42=b(H){8 t=7.C[H];8 h=7.n.6R(H);8 2Z=h.2R();8 11=t.1M();2Z.2g(11.y());2Z.2s(11.w())};a.d.4d=b(t){g(!t.1M()){p}8 c=7.n;8 h=7.1e(t);g(t.46()){h.2T(t.46())}8 1K=c.3S(\'\');g(t.2X()){1K.2Y(t.2X())}A{1K.2Y(7.4f)}8 f=c.4e(\'\');f.4Y().3Q(1K);h.1B(f);8 1J=c.4T(\'\');1J.2g(t.1M().y());1J.2s(t.1M().w());h.1z(1J);c.X().L(h);8 l=7;8 4g=j.r.K.1X(t,\'5b\',b(){8 H=l.37(t);l.42(H)});7.30.1Y(4g)};a.d.4h=b(1b){8 c=7.n;8 h=7.1e(1b);8 38=c.2A(\'\');h.1z(38);8 f=7.1A(1b);h.1B(f);8 28=c.2I(\'\');38.26(28);8 F=28.1O();8 1H=1b.4r().4s();o(8 i=0,V;V=1H[i];i++){F.T(V.y(),V.w(),0)}c.X().L(h)};a.4w=b(2b,1S,17){8 1G=5L;1S/=1G;17=17*(s.1E/1C);8 2h=2b.y()*(s.1E/1C);8 4K=2b.w()*(s.1E/1C);8 2i=s.2j(1S);8 2k=s.2l(1S);8 2m=s.2l(2h);8 2n=s.2j(2h);8 2o=2i*2m+2k*2n*s.2j(17);8 3i=s.60(2k*2n*s.2l(17),2i-2m*2o);p 20 j.r.3j((s.69(2o)/(s.1E/1C)),(4K+3i)/(s.1E/1C))};a.d.3k=b(P){8 c=7.n;8 Z=P.4D();8 1G=P.6b();8 h=7.1e(P);h.1z(c.2A(\'\'));8 1d=c.2I(\'\');8 f=7.1A(P);h.1B(f);8 2p=25;o(8 i=0;i<2p;i++){8 17=6f/2p*i;8 2q=a.4w(Z,1G,17);1d.1O().T(2q.y(),2q.w(),0)}h.2R().26(1d);h.2T(\'h\');c.X().L(h)};a.d.3n=b(18){8 c=7.n;8 h=7.1e(18);8 1I=c.6n(\'\');1I.6o(1j);h.1z(1I);8 f=7.1A(18);h.1B(f);8 F=1I.1O();8 1H=18.4r().4s();o(8 i=0,V;V=1H[i];i++){F.T(V.y(),V.w(),0)}c.X().L(h)};a.d.1A=b(k){8 f=7.n.4e(\'\');8 3q=f.6r();8 2t=f.6t();2t.6u(7.1l(k,\'6A\',3));8 2v=7.1l(k,\'2v\',1);8 2w=7.1l(k,\'2w\',0.3);8 2x=7.1l(k,\'2x\',\'#3w\');8 2y=7.1l(k,\'2y\',\'#3w\');2t.3y().29(a.2U(2x,2v));3q.3y().29(a.2U(2y,2w));p f};a.d.1l=b(3z,3A,3B){8 2z=3z.3D(3A);g(1p 2z==\'U\'){p 3B}A{p(2z)}};a.d.3U=b(){8 v=7.3F();o(8 i=0,t;t=v[\'3G\'][i];i++){7.4d(t)}o(8 i=0,1b;1b=v[\'3H\'][i];i++){7.4h(1b)}o(8 i=0,18;18=v[\'3I\'][i];i++){7.3n(18)}o(8 i=0,14;14=v[\'3J\'][i];i++){7.4A(14)}o(8 i=0,P;P=v[\'3K\'][i];i++){7.3k(P)}o(8 i=0,1a;1a=v[\'3L\'][i];i++){7.3Z(1a.3X())}o(8 i=0,k;k=v[\'3M\'][i];i++){7.3x(k)}};a.d.3t=b(){8 l=7;j.S.4V(7.3N,b(3O){l.n=(3O);l.3P();l.31()},b(e){l.2B();l.m.4Z(j.r.51.52);1P\'33 1V 2d 53 54 55: \'+e;})};a.d.3P=b(){8 c=7.n;c.56().3R(1j);8 2C=c.59();2C.3R(c.5a);8 2D=2C.5c();2D.5d(c.5e);2D.5f(c.5g);8 2E=c.5i();2E.3V(c.5k,1j);2E.3V(c.5l,1j);8 l=7;j.r.K.1X(7.m,a.2a,b(3W){g(!l.1y){p}8 1L=l.n.5o(\'\');8 h=l.2r;1L.5p(h);1L.5q(3W.5r());l.n.5s(1L)});j.S.5t(c.5u(),\'3Y\',b(K){8 2G=K.5x();8 k=l.C[2G.5y()];g(k){K.5z();8 40=l.2H(\'M\');o(8 i=0,2J;2J=40[i];i++){2J.5E()}l.2r=2G;j.r.K.44(k,\'3Y\')}})};a.d.45=b(){8 x=7.n.1R().5G(7.n.5H);8 1F=x.5I();8 1u=s.5J(a.2c-(s.1N(1F)/s.1N(2)));g(!7.m.3e()==1u){7.m.47(1u-1)}A{7.m.47(1u)}8 Z=20 j.r.3j(x.5M(),x.5N());7.m.5O(Z)};a.d.3f=b(){g(!7.1y){p}7.45();8 l=7;1o.1s(b(){l.32()},50);1o.1s(b(){l.2B()},5Q)};a.d.2B=b(){7.48();7.49();7.Q.f.2S=\'4a\';7.1y=2u};a.d.3l=b(I){8 4b=I.f.13;g(7.Q.1f){8 1h=7.Q.1f.2O;o(8 i=0,z;z=1h[i];i++){z[\'2Q\']=z.f.13;z.f.13=-1}I[\'2Q\']=4b}7.Q.f.13=I.f.13=0};a.d.48=b(){8 1h=7.Q.1f.2O;o(8 i=0,z;z=1h[i];i++){z.f.13=z[\'2Q\']}};a.d.3m=b(I){8 1c=7.1x=1T.1v(\'62\');1c.63=\'64:2u;\';1c.65=\'66\';1c.67=\'0\';8 f=1c.f;f.13=-68;f.1t=f.1q=\'2W%\';f.11=\'1W\';f.6d=f.6e=0;I.L(1c)};a.d.49=b(){g(7.1x){7.1x.1f.4t(7.1x);7.1x=22}};a.d.3h=b(){g(7.m.O.4l)8 D=\'D=[\\\'\\"]?\'+7.m.O.4l.1r+\'[\\"\\\']?\';A g(7.m.O.4n)8 D=\'D=[\\\'\\"]?\'+7.m.O.4n.1r+\'[\\"\\\']?\';A g(7.m.O.4o)8 D=\'D=[\\\'\\"]?\'+7.m.O.4o.1r+\'[\\"\\\']?\';A g(7.m.O.4p)8 D=\'D=[\\\'\\"]?\'+7.m.O.4p.1r+\'[\\"\\\']?\';A 8 D=\'D=[\\\'\\"]?\'+7.23+\'[\\"\\\']?\';8 4q=20 6k(D);g(7.Q.1f){8 1h=7.Q.1f.2O;o(8 i=0,z;z=1h[i];i++){g(4q.6l(z.6m)){p z}}}p 22};a.d.4C=b(){8 1k=7.2P;8 W=7.Q=1T.1v(\'1Z\');W.f.11=\'1W\';W.f.1t=0;W.f.1q=0;W.6p=0;W.f.2S=\'4a\';8 1m=7.4u=1T.1v(\'1Z\');1m.f.1t=1k.4v+\'21\';1m.f.1q=1k.4x+\'21\';1m.f.11=\'1W\';W.L(1m);8 1w=7.3N=1T.1v(\'1Z\');1w.f.11=\'1W\';1w.f.1t=\'2W%\';1w.f.1q=\'2W%\';1m.L(1w);7.m.6w[j.r.6x.6y].1Y(W);8 l=7;j.r.K.1X(7.m,\'6z\',b(){l.4z()})};a.d.4z=b(){8 34=7.4u.f;8 1k=7.2P;34.1t=1k.4v+\'21\';34.1q=1k.4x+\'21\'};a.d.2H=b(4B){8 35=[];8 v=a.C[4B];o(8 i 6E v){g(v.6F(i)){8 k=v[i];g(k.3D(\'u\')==7.m){35.1Y(k)}}}p 35};a.d.3F=b(){8 v={};8 1g=a.24;o(8 i=0,q;q=1g[i];i++){v[q]=7.2H(q)}p v};a.C={};a.39=b(){j.r.M.d.4H=j.r.M.d[\'4I\'];a.C[\'M\']={};j.r.M.d[\'4I\']=b(u,4J){g(u){g(!7[\'E\']){7[\'E\']=a.3a++;a.C[\'M\'][7[\'E\']]=7}}A{4L a.C[\'M\'][7[\'E\']];7[\'E\']=U}j.r.K.44(u,a.2a,7);7.4H(u,4J)}};a.3b=b(q){8 3c=j.r[q].d;3c[\'4O\']=3c.4P;a.C[q]={};j.r[q].d[\'4P\']=b(u){g(u){g(!7[\'E\']){7[\'E\']=a.3a++;a.C[q][7[\'E\']]=7}}A{4L a.C[q][7[\'E\']];7[\'E\']=U}7[\'4O\'](u)}};a.24=[\'3G\',\'3I\',\'3H\',\'3J\',\'3K\',\'3L\',\'3M\',\'M\'];a.3a=0;a.3d=b(){g(!(1p(j)!="U"&&1p(j.S)!="U")){4R.1N("6T")}A{4S(a.2f);4R.1N("6V");8 1g=a.24;o(8 i=0,q;q=1g[i];i++){a.3b(q);g(q==\'M\'){a.39()}}}};a.3d=b(){g(1p(j)!="U"&&1p(j.S)!="U"){4S(a.2f);8 1g=a.24;o(8 i=0,q;q=1g[i];i++){a.3b(q);g(q==\'M\'){a.39()}}}};a.2f=6W("a.3d()",50);',62,431,'|||||||this|var||GoogleEarth|function|ge|prototype||style|if|placemark||google|overlay|that|map_|instance_|for|return|overlayClass|maps|Math|marker|map|overlays|lng|lookAt|lat|sibling|else||overlays_|title|__gme_id|coords||placemarkId|mapTypeControlDiv|ne|event|appendChild|InfoWindow|opacity|mapTypes|circle|controlDiv_||earth|pushLatLngAlt|undefined|latLng|control|getFeatures|sw|center||position|hex|zIndex|rectangle|||heading|polyline||kml|polygon|iframeShim|ring|createPlacemark_|parentNode|overlayClasses|siblings|bounds|true|mapDiv|getMVCVal_|inner|MAP_TYPE_ID|window|typeof|height|alt|setTimeout|width|zoom|createElement|earthDiv|iframeShim_|earthVisible_|setGeometry|createStyle_|setStyleSelector|180|mapTypeIds|PI|range|radius|path|lineString|point|icon|balloon|getPosition|log|getCoordinates|throw|substring|getView|distance|document|features|Earth|absolute|addListener|push|DIV|new|px|null|earthTitle_|OVERLAY_CLASSES||setOuterBoundary||outer|set|INFO_WINDOW_OPENED_EVENT_|from|MAX_EARTH_ZOOM_|API|getInstance|objint|setLatitude|fromLat|cosDistance|cos|sinDistance|sin|sinFromLat|cosFromLat|sinLat|vertices|offset|lastClickedPlacemark_|setLongitude|lineStyle|false|strokeOpacity|fillOpacity|strokeColor|fillColor|val|createPolygon|hideEarth_|navControl|screen|layerRoot|not|target|getOverlaysForType_|createLinearRing|infoWindow|getOptions|setFlyToSpeed|displayCounter_|setAbstractView|childNodes|mapDiv_|__gme_ozi|getGeometry|display|setName|getKMLColor_|groundOverlay|100|getIcon|setHref|geom|moveEvents_|refresh_|flyToMapView_|Google|innerStyle|tmp|evnt|generatePlacemarkId_|poly|modifyOpen_|counter_|modifySetMap_|proto|trackOverlays_|getZoom|switchToMapView_|div|findMapTypeControlDiv_|dLng|LatLng|createCircle_|setZIndexes_|addShim_|createPolyline_|system|earthcontrol_|polyStyle|on|is|initializeEarth_|earthMapType|mapTypeControlOptions|000000|addGroundOverlay_|getColor|mvcObject|property|def|clearPlacemarks_|get|latLonBox|getOverlays_|Marker|Polygon|Polyline|Rectangle|Circle|KmlLayer|GroundOverlay|earthDiv_|instance|addEarthEvents_|setIcon|setVisibility|createIcon|clearMoveEvents_|addMapOverlays_|enableLayerById|infowindow|getUrl|click|addKML_|infoWindows|url|updatePlacemark_|earthcontrol|trigger|matchMapToEarth_|getTitle|setZoom|unsetZIndexes_|removeShim_|none|oldIndex|options|createPoint_|createStyle|RED_ICON_|moveEvent|createPolygon_|abgr|256|addEarthMapType_|roadmap|getFirstChild|satellite|hybrid|terrain|regex|getPath|getArray|removeChild|innerDiv_|clientWidth|computeOffset_|clientHeight|tilt|resizeEarth_|createRectangle_|type|addEarthControl_|getCenter|getBounds|mapTypeChanged_|getNorthEast|openOriginal_|open|anchor|fromLng|delete|showEarth_|getSouthWest|__gme_setMapOriginal|setMap|ownerDocument|console|clearInterval|createPoint|maxZoom|createInstance|getMapTypeId|name|getIconStyle|setMapTypeId||MapTypeId|ROADMAP|failed|to|initialize|getWindow|GoogleEarthAPI|join|getNavigationControl|VISIBILITY_AUTO|position_changed|getScreenXY|setYUnits|UNITS_INSET_PIXELS|setXUnits|UNITS_PIXELS|getTile|getLayerRoot|createLookAt|LAYER_BORDERS|LAYER_ROADS|tileCoord|GEV3_|createHtmlStringBalloon|setFeature|setContentString|getContent|setBalloon|addEventListener|getGlobe|loaded|pow|getTarget|getId|preventDefault|createPlacemark|installed|GEInfoWindowOpened|setRange|close|mapfiles|copyAsLookAt|ALTITUDE_RELATIVE_TO_GROUND|getRange|round|getDiv|6378137|getLatitude|getLongitude|panTo|http|2200|setHeading|setAltitude|isInstalled|supported|paddle|red|tileSize|setTilt|75|atan2|setOptions|IFRAME|src|javascript|scrolling|no|frameBorder|100000|asin|200|getRadius|com|left|top|360|250|isSupported|Size|createGroundOverlay|RegExp|test|innerHTML|createLineString|setTessellate|index|setLatLonBox|getPolyStyle|createLatLonBox|getLineStyle|setWidth|removeListener|controls|ControlPosition|TOP_LEFT|resize|strokeWeight|getLatLonBox|setBox|png|in|hasOwnProperty|maptypeid_changed|while|FF|parseInt|parseFloat|fetchKml|alert|Bad|or|KML|255|getElementById|toString|ships|length|hihihi|setInterval'.split('|'),0,{}))