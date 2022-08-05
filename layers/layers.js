ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102003").setExtent([-2315663.056419, 287835.207619, -2241271.357531, 354823.416090]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PotentialCarbonOffsetofFullSolarCapacity_1 = new ol.format.GeoJSON();
var features_PotentialCarbonOffsetofFullSolarCapacity_1 = format_PotentialCarbonOffsetofFullSolarCapacity_1.readFeatures(json_PotentialCarbonOffsetofFullSolarCapacity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_PotentialCarbonOffsetofFullSolarCapacity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialCarbonOffsetofFullSolarCapacity_1.addFeatures(features_PotentialCarbonOffsetofFullSolarCapacity_1);
var lyr_PotentialCarbonOffsetofFullSolarCapacity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotentialCarbonOffsetofFullSolarCapacity_1, 
                style: style_PotentialCarbonOffsetofFullSolarCapacity_1,
                interactive: false,
    title: 'Potential Carbon Offset of Full Solar Capacity<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_0.png" /> 0 - 17<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_1.png" /> 17 - 3603<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_2.png" /> 3603 - 5124<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_3.png" /> 5124 - 6316<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_4.png" /> 6316 - 8069<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_5.png" /> 8069 - 9835<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_6.png" /> 9835 - 12218<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_7.png" /> 12218 - 16986<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_8.png" /> 16986 - 29322<br />\
    <img src="styles/legend/PotentialCarbonOffsetofFullSolarCapacity_1_9.png" /> 29322 - 71843<br />'
        });
var format_CityBoundaries_2 = new ol.format.GeoJSON();
var features_CityBoundaries_2 = format_CityBoundaries_2.readFeatures(json_CityBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_CityBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityBoundaries_2.addFeatures(features_CityBoundaries_2);
var lyr_CityBoundaries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityBoundaries_2, 
                style: style_CityBoundaries_2,
                interactive: false,
                title: '<img src="styles/legend/CityBoundaries_2.png" /> City Boundaries'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PotentialCarbonOffsetofFullSolarCapacity_1.setVisible(true);lyr_CityBoundaries_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PotentialCarbonOffsetofFullSolarCapacity_1,lyr_CityBoundaries_2];
lyr_PotentialCarbonOffsetofFullSolarCapacity_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'carbon off': 'Carbon Offset Potential (Metric Tons)', 'solardata_': 'solardata_', 'solardat_1': 'solardat_1', 'solardat_2': 'solardat_2', 'solardat_3': 'solardat_3', 'solardat_4': 'solardat_4', 'solardat_5': 'solardat_5', 'solardat_6': 'solardat_6', 'solardat_7': 'solardat_7', 'solardat_8': 'solardat_8', 'solardat_9': 'solardat_9', 'solardat10': 'solardat10', 'solardat11': 'solardat11', 'solardat12': 'solardat12', 'solardat13': 'solardat13', 'solardat14': 'solardat14', 'solardat15': 'solardat15', 'solardat16': 'solardat16', 'solardat17': 'solardat17', 'solardat18': 'solardat18', 'solardat19': 'solardat19', 'solardat20': 'solardat20', 'solardat21': 'solardat21', 'solardat22': 'solardat22', 'solardat23': 'solardat23', 'solardat24': 'solardat24', 'solardat25': 'solardat25', 'solardat26': 'solardat26', 'solardat27': 'solardat27', 'solardat28': 'solardat28', 'solardat29': 'solardat29', 'solardat30': 'solardat30', });
lyr_CityBoundaries_2.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'PLACEFP': 'PLACEFP', 'PLACENS': 'PLACENS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'PCICBSA': 'PCICBSA', 'PCINECTA': 'PCINECTA', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PotentialCarbonOffsetofFullSolarCapacity_1.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'carbon off': 'TextEdit', 'solardata_': 'Hidden', 'solardat_1': 'Hidden', 'solardat_2': 'Hidden', 'solardat_3': 'TextEdit', 'solardat_4': 'TextEdit', 'solardat_5': 'TextEdit', 'solardat_6': 'TextEdit', 'solardat_7': 'TextEdit', 'solardat_8': 'TextEdit', 'solardat_9': 'TextEdit', 'solardat10': 'TextEdit', 'solardat11': 'TextEdit', 'solardat12': 'TextEdit', 'solardat13': 'TextEdit', 'solardat14': 'TextEdit', 'solardat15': 'TextEdit', 'solardat16': 'TextEdit', 'solardat17': 'TextEdit', 'solardat18': 'TextEdit', 'solardat19': 'TextEdit', 'solardat20': 'TextEdit', 'solardat21': 'TextEdit', 'solardat22': 'TextEdit', 'solardat23': 'TextEdit', 'solardat24': 'TextEdit', 'solardat25': 'TextEdit', 'solardat26': 'TextEdit', 'solardat27': 'TextEdit', 'solardat28': 'TextEdit', 'solardat29': 'TextEdit', 'solardat30': 'TextEdit', });
lyr_CityBoundaries_2.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'PLACENS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'PCICBSA': 'TextEdit', 'PCINECTA': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PotentialCarbonOffsetofFullSolarCapacity_1.set('fieldLabels', {'carbon off': 'no label', 'solardat_3': 'no label', 'solardat_4': 'no label', 'solardat_5': 'no label', 'solardat_6': 'no label', 'solardat_7': 'no label', 'solardat_8': 'no label', 'solardat_9': 'no label', 'solardat10': 'no label', 'solardat11': 'no label', 'solardat12': 'no label', 'solardat13': 'no label', 'solardat14': 'no label', 'solardat15': 'no label', 'solardat16': 'no label', 'solardat17': 'no label', 'solardat18': 'no label', 'solardat19': 'no label', 'solardat20': 'no label', 'solardat21': 'no label', 'solardat22': 'no label', 'solardat23': 'no label', 'solardat24': 'no label', 'solardat25': 'no label', 'solardat26': 'no label', 'solardat27': 'no label', 'solardat28': 'no label', 'solardat29': 'no label', 'solardat30': 'no label', });
lyr_CityBoundaries_2.set('fieldLabels', {'GISJOIN': 'no label', 'STATEFP': 'no label', 'PLACEFP': 'no label', 'PLACENS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'PCICBSA': 'no label', 'PCINECTA': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CityBoundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});