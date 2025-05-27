var size = 0;
var placement = 'point';

var style_Peta_Desa_Rawan_Bencana_Alam_Banjir_Sumatera_Utara_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "3.9000000000000004px \'Open Sans\', sans-serif";
    var labelFill = "#ff0808";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "center";
    var offsetX = 15;
    var offsetY = 10;
    var feature
	var value
    var clusteredFeatures = feature.get("features");
    size = clusteredFeatures.length;
    if (size == 1) { // If cluster has one feature
        var feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("");
        if (feature.get("NAMA DESA") !== null) {
            labelText = String(feature.get("NAMA DESA"));
        }
    } else { // If cluster has more than one feature
		labelText = size.toString();
		var radius = 6 + Math.log(size) * 3;
		var maxClusterSize = 80;
		var relativeSize = Math.min(size / maxClusterSize, 1);
		var redComponent, greenComponent, blueComponent = 0;
		if (relativeSize < 0.5) {
			redComponent = Math.floor(210 * (relativeSize / 0.5));
			greenComponent = 210;
		} else {
			redComponent = 210;
			greenComponent = Math.floor(210 * (1 - (relativeSize - 0.5) / 0.5));
		}
		var color = `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.75)`;
		return [
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius + 4,
					fill: new ol.style.Fill({
						color: `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.3)`
					})
				})
			}),
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius,
					fill: new ol.style.Fill({
						color: color
					})
				}),
				text: new ol.style.Text({
					font: labelFont,
					text: labelText,
					fill: new ol.style.Fill({
						color: labelFill
					}),
					placement: placement
				})
			})
		];
	}
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [579.997, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/swimmer.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
