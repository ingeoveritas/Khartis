export default {

  "general": {
    "next": "next",
    "back": "back",
    "submit": "submit",
    "cancel": "cancel",
    "later": "later",
    "import": "import",
    "continue": "continue",
    "validate": "validate",
    "reset": "reset",
    "open": "Open",
    "close": "Close",
    "or": "or",
    "and": "and",
    "none": "none",
    "download": "download",
    "overwrite": "overwrite",
    "duplicate": "duplicate",
    "loading": "chargement",
    "search": "rechercher",
    "save": "save project",
    "width": "width",
    "yes": "yes",
    "no": "no",
    "add": "ajouter",
    "imported": "imported",
    "warning": "warning",
    "error": {
     "one": "error",
     "other": "errors"
    }
  },

  "d3.format": {
    "decimal": ".",
    "thousands": ","
  },

  "help.wiki": "Help - Wiki Khartis",
  "help.documentation": "Help - Khartis documentation",
  "help.knowMore": "Know more",
  "help.createViz": "To learn more about the available visualizations and how to do them:",
  "help.createViz.link": "see the help",

  "updater": {
    "title": "An update is available",
    "installAndRestart": "Install and restart",
    "releaseNotes": "release notes",
    "installation": "Install..."
  },

  "project": {

    "resume": "resume last project",

    "step1": {
      "title": {
        "importData": "data selection",
        "fileCsv": "or select a csv file",
        "testData": "Try our sample datasets",
        "selectAMap": "Select a map",
        "orImportMap": "import your own map"
      },
      "tooltip": {
        "csv": "Filename extension .csv use comma as column separator",
        "resumeProject": "Will resume the last project edited on this computer ",
        "importProject": "Import a saved project"
      },
      "importPasteCsv": "import data by pasting from a spreadsheet",
      "pasteCsv": "paste your data here or drop a csv file",
      "downloadCsvModel": "download model (.csv)",
      "importPoject": {
        "title": "Import or drop a Khartis project",
        "loadError": "Unable to load selected file",
        "projectExists": "Project already exists"
      },
      "search" : "Search by country, region or department",
      "useImportedData": "Use data from base map",
      "projectionSettings": "projection settings"
    },

    "step2": {
      "title": {
        "preview": "data preview"
      },
      "import": {
        "success": "Import completed successfully",
        "fatal": "impossible to continue, please edit and modify your csv",
        "warningsMessage": {
          "one": "non-blocking anomaly",
          "other": "non-blocking anomalies"
        },
        "warning": {
          "trim": "Some cells have unnecessary spaces at the beginning or end of a word. They were removed when importing"
        },
        "errorsMessage": {
          "one": "blocking anomaly",
          "other": "blocking anomalies"
        },
        "error": {
          "header.emptyCell": "the header seems incorrect: some cells are empty.",
          "oneColumn": "only one column was found",
          "colNumber": "csv format error: all rows don't have the same number of columns."
        },
        "noError": "aucune erreur détectée",
        "correct": "corriger",
        "rowCount": {
          "one": "row imported",
          "other": "rows imported"
        },
        "colCount": {
          "one": "column imported",
          "other": "columns imported"
        },
        "geoRefColumn": "Geographic column",
        "geoRefColumnNotFound": "No geographic column has been found",
        "tooltip": {
          "geoRefColumn": "This is the column of your table that will be used to identify the geography of your data"
        }
      },
      "editColumn": {
        "unrecognizedColumns": "Some cells have not been recognized",
        "autoCorrect": "Auto correct"
      },
      "back": "start over by importing new data"
    }

  },

  "navigation": {

    "editColumn": "Edit a column",

    "sidebar": {
      "data" : "data",
      "visualisations" : "visualizations",
      "export": "export"
    }

  },

  "variable.meta": {
    "type": {
      "text": "text",
      "numeric": "numeric",
      "geo": "geographic code",
      "lat": "latitude",
      "lon": "longitude",
      "auto": "automatic"
    }
  },

  "projection": {
    "title": "projection",
    "settings": {
      "longitude": "longitude",
      "latitude": "latitude",
      "rotation": "rotation"
    },
    "rating": {
      "surface": "area",
      "distance": "distance",
      "angle": "angle"
    },
    "atlantis": {
      "name": "Atlantis",
      "description": "Ceci est une description"
    },
    "bertin": {
      "name": "Bertin (1953)",
      "description": "Ceci est une description"
    },
    "briesemeister": {
      "name": "Briesemeister",
      "description": "Ceci est une description"
    },
    "interrupted_goode_homolosine": {
      "name": "Goode H.",
      "description": "Ceci est une description"
    },
    "interrupted_goode_homolosine_oceans": {
      "name": "Goode Oceans",
      "description": "Ceci est une description"
    },
    "lambert_azimuthal_equal_area": {
      "name": "LAEA",
      "description": "Ceci est une description"
    },
    "mollweide": {
      "name": "Mollweide",
      "description": "Ceci est une description"
    },
    "natural_earth": {
      "name": "Natural Earth",
      "description": "Ceci est une description"
    },
    "orthographic": {
      "name": "Orthographic",
      "description": "Ceci est une description"
    },
    "plate_carree": {
      "name": "Plate carrée",
      "description": "Ceci est une description"
    },
    "waterman_butterfly": {
      "name": "Waterman",
      "description": "Ceci est une description"
    },
    "mercator": {
      "name": "Mercator",
      "description": "Ceci est une description"
    },
    "armadillo": {
      "name": "Armadillo",
      "description": "Ceci est une description"
    },
    "airocean": {
      "name": "Air Ocean",
      "description": "Ceci est une description"
    },
    "equalearth": {
      "name": "Equal Earth",
      "description": "Ceci est une description"
    }
  },

  "visualization": {
    "new": "Add a visualization",
    "title": {
      "choose": {
        "title": "choose a visualization",
        "ordered": "showing order",
        "different": "showing differences",
        "combined": "combining series",
      },
      "chooseVar": "Choix des variables",
      "chooseOrderedSurf": {
        "title": "You would like",
        "classes": {
          "title": "make classes with your data?",
          "description": "Similar or homogeneous values are grouped into classes to simplify the message. They must be numbers (stocks, dates)."
        },
        "cat": {
          "title": "show pre-existing categories?",
          "description": "Each color is a category in the series. The data can be numbers (dates) or text (e.g. high, medium, low)."
        }
      },
      "categories": "categories",
      "nodata": "missing data"
    },
    "variables": {
      "choose": "choose a variable",
      "noneAvailable": "no compatible variable is available.",
      "checkTheTypes": "check types at data step.",
      "transform": "use another variable to put color into symbols or compare two symbols"
    },
    "settings": {
      "diagram": {
        "title": "frequency diagram",
        "frequencies": "frequencies",
        "values": "values",
        "cumulatives": "aggregated",
        "classes": "classed",
        "tooltip": {
          "title": "It shows the distribution of occurrences according to the values of the series"
        }
      },
      "title" : "settings",
      "symbols": "symbols",
      "surfaces": "surfaces",
      "thresholds": "thresholds",
      "discretization": {
        "title": "discretization",
        "tooltip": {
          "title": "Breaking the series into classes"
        },
        "method": {
          "unique": "proportional",
          "grouped": "grouped into classes",
          "tooltip": {
            "unique": "Each value is translated by a symbol that is strictly proportional to him",
            "grouped": "Values are grouped into ordered classes"
          }
        },
        "type": {
          "regular": "regular intervals",
          "mean": "nested means",
          "quantile": "quantiles",
          "standardDeviation": "standard deviation",
          "jenks": "jenks",
          "linear": "none",
          "manual": "manual"
        }
      },
      "classes": "classes",
      "breakValue": "breaking value",
      "shape": {
        "title": "shape",
        "rect": "rect",
        "circle": "circle",
        "bar": "bar",
        "triangle": "triangle"
      },
      "size": "size",
      "scale": "scale",
      "contrast": {
        "title": "contrast",
        "tooltip": "Compress or expand the size for a “reading” of info different from normal"
      },
      "color": {
        "one": "color",
        "other": "colors"
      },
      "pattern": {
        "one": "hatching",
        "other": "hatching"
      },
      "reverse": "reverse",
      "stroke": "stroke",
      "strokeSize": "stroke size",
      "opacity": "opacity",
      "alignment": "alignment",
      "spacing": "spacing",
      "bottom": "bas",
      "middle": "milieu",
      "top": "haut",
      "small": "petit",
      "medium": "moyen",
      "high": "grand",
      "ownScale": {
        "title": "échelle propre",
        "tooltip": "Each variable is treated independently of each other. Two legends result. Note: MAX symbol sizes are the same"
      },
      "commonScale": {
        "title": "échelle commune",
        "tooltip": "Both variables are treated together. There is only one legend. Symbol sizes are strictly comparable"
      }
    },
    "type": {
      "ordered": {
        "sym": {
          "proportional": "proportional symbols",
          "ordered": "ordered symbols"
        },
        "surf": {
          "ordered": "ordered colors"
        }
      },
      "different": {
        "sym": "different symbols",
        "surf": "different colors"
      },
      "combined": {
        "sym": {
          "ordered": "colored (ordered) proportional symbols",
          "different": "colored (different) proportional symbols",
          "double": "combined proportional symbols",
        }
      },
      "quanti": {
        "val_surfaces": {
          "name": "values > areas",
          "description": "color gradient follows the values"
        },
        "val_symboles": {
          "name": "values > symbols",
          "description": "symbols are proportionnal to the values"
        }
      },
      "quali": {
        "cat_surfaces": {
          "name": "categories > areas",
          "description": "various colors separate categories"
        },
        "taille_valeur": {
          "name": "categories on areas 2",
          "description": "color gradient follows values order"
        },
        "cat_symboles": {
          "name": "categories > symbols",
          "description": "symbols separate categories"
        },
        "ordre_symboles": {
          "name": "categories on symbols 2",
          "description": "symbols order follows values order"
        }
      }
    },
    "rule": {
      "no_value": "(no value)"
    },
    "warning": {
      "rule.count": {
        "title": "non-blocking anomaly",
        "about": "",
        "explenation": "Are you sure that your data contains categories?",
        "help": {
          "_": "The number of detected occurrences suggests that your data rather show quantities.",
          "1": "It would be more appropriate to use proportionality or order.",
          "2": "",
          "3": ""
        }
      }
    },
    "alert": {
      "remove": {
        "title": "Confirm delete",
        "content": "Are you sure you want to delete this layer ?"
      },
      "bigDataSet": {
        "title": "Warning",
        "content": "This layer contains a large data set. This could result in performance issues. Do you want to continue ?"
      },
      "threshold": {
        "title": "new threshold",
        "extent": "threshold is outside of the statistical series",
        "valueUsed": "threshold is already used"
      }
    }
  },

  "export": {
    "title": {
      "labels": "labels",
      "styles": "customize",
      "sizes": "dimensions",
      "legend": "legende",
      "export": "export",
      "drawings": "adding information"
    },
    "placeholder": {
      "mapTitle": "map title",
      "dataSource": "data source",
      "author": "author / copyright",
      "comment": "comment"
    },
    "settings": {
      "labelling": {
        "text": "text",
        "filter": "filter by",
        "categories": "categories",
        "chooseCategories": "choose",
        "threshold": "threshold",
        "selectAll": "select all",
        "unselectAll": "unselect all",
      },
      "show": "show",
      "reset": "reset",
      "edit": "edit",
      "legend": {
        "stacking": "presentation",
        "chooseLegend": "choose",
        "roundValue": "round values",
        "valuePrecision": "decimals"
      },
      "title": "titre",
      "width": "width",
      "height": "height",
      "orientation": {
        "title": "orientation",
        "horizontal": "horizontal",
        "vertical": "vertical"
      },
      "borders": "borders",
      "grid": "graticules",
      "backmap": "basemap",
      "sphere": "sphere",
      "sea": "seas",
      "parallel": "equator",
      "background": "background",
      "image": {
        "title": "image",
        "normal": "normal",
        "large": "large (@2x)",
        "xLarge": "extra large (@3x)"
      },
      "vector": "vectoriel",
      "optimised": "for",
      "formatSelection": "with format"
    },
    "drawings": {
      "text": "text",
      "addDrawing": {
        "1": "Add text",
        "2": "or an arrows",
        "3": "using the toolbar on the right side of the screen"
      },
      "curve": "curve",
      "strokeWidth": "stroke",
      "dash": "dash",
      "shapes": "shapes",
      "align": "align",
      "text": "text",
      "scale": "scale",
      "symbol": "symbol",
      "inherited": "inherited",
      "anchor": {
        "title": "ancrage",
        "onMap": "on the map",
        "onPage": "on page",
        "warning": "this drawing can't be anchored on the map, it has been anchored on the page",
        "tooltip": {
          "onMap": "Object follows map's geography",
          "onPage": "Object's postiion is fixed in page"
        }
      },
      "helper": {
        "text": "Click on the map to add text",
        "arrow": "Click on the map to add an arrow"
      }
    }
  },

  "legend": {
    "editTitleHere": "Edit legend's title"
  },

  "toolbar": {
    "blindness": {
      "menu.title": "Color blindness simulation",
      "type": {
        "protanopia": "protanopia (red-green)",
        "protanomaly": "protanomaly (red-green)",
        "deuteranopia": "deuteranopia (red-green)",
        "deuteranomaly": "deuteranomaly (red-green)",
        "tritanopia": "tritanopia (blue-yellow)",
        "tritanomaly": "tritanomaly (blue-yellow)",
        "achromatopsia": "achromatopsia",
        "achromatomaly": "achromatomaly"
      }
    },
    "tooltip": {
      "center": "Center the map",
      "zoomin": "Zoom in",
      "zoomout": "Zoom out",
      "info": "Information on a map object",
      "blindness": "Color blindness simulation",
      "drawText": "Add a text",
      "drawArrow": "Add an arrow"
    }
  },

  "basemap": {
    "world": "World > countries (2016)",
    "german states 2016": "Germany > States (2016)",
    "german districts 2016": "Germany > Districts (2016)",
    "brazil ufe 2015": "Brésil > States (2015)",
    "brazil mee 2015": "Brésil > mesoregions (2015)",
    "brazil mie 2015": "Brésil > microregions (2015)",
    "canada prov 2016": "Canada > provinces (2016)",
    "canada cd 2016": "Canada > census division (2016)",
    "eu country 2013": "Europe > States (2016)",
    "eu nuts-2 2013": "Europe > nuts 2 (2013)",
    "eu nuts-3 2013": "Europe > nuts 3 (2013)",
    "eu nuts-2 2016": "Europe > nuts 2 (2016)",
    "eu nuts-3 2016": "Europe > nuts 3 (2016)",
    "spain prov 2015": "Spain > provinces (2015)",
    "spain auto 2015": "Spain > communities (2015)",
    "us state 2015": "United States > States (2015)",
    "france dept 1918": "France > departments IIIe rep. (1871-1918)",
    "france dept 1919": "France > departments IIIe rep. (1919-1940)",
    "france dept": "France > departments (2016)",
    "france reg 2015": "France > regions (2015)",
    "france reg 2016": "France > regions (2016)",
    "france circ 2017": "France > electoral districts (2012 & 2017)",
    "FR-11 com 2016": "France > municipalities (2016) > Île-de-France",
    "FR-24 com 2016": "France > municipalities (2016) > Centre-Val de Loire",
    "FR-27 com 2016": "France > municipalities (2016) > Bourgogne-Franche-Comté",
    "FR-28 com 2016": "France > municipalities (2016) > Normandie",
    "FR-32 com 2016": "France > municipalities (2016) > Hauts-de-France",
    "FR-44 com 2016": "France > municipalities (2016) > Grand Est",
    "FR-52 com 2016": "France > municipalities (2016) > Pays de la Loire",
    "FR-53 com 2016": "France > municipalities (2016) > Bretagne",
    "FR-75 com 2016": "France > municipalities (2016) > Nouvelle-Aquitaine",
    "FR-76 com 2016": "France > municipalities (2016) > Occitanie",
    "FR-84 com 2016": "France > municipalities (2016) > Auvergne-Rhône-Alpes",
    "FR-93 com 2016": "France > municipalities (2016) > Provence-Alpes-Côte d’Azur",
    "FR-94 com 2016": "France > municipalities (2016) > Corse",
    "FRA10 com 2016": "France > municipalities (2016) > Guadeloupe",
    "FRA20 com 2016": "France > municipalities (2016) > Martinique",
    "FRA30 com 2016": "France > municipalities (2016) > Guyane",
    "FRA40 com 2016": "France > municipalities (2016) > La Réunion",
    "FRA50 com 2016": "France > municipalities (2016) > Mayotte",
    "FR-11 com 2017": "France > municipalities (2017) > Île-de-France",
    "FR-24 com 2017": "France > municipalities (2017) > Centre-Val de Loire",
    "FR-27 com 2017": "France > municipalities (2017) > Bourgogne-Franche-Comté",
    "FR-28 com 2017": "France > municipalities (2017) > Normandie",
    "FR-32 com 2017": "France > municipalities (2017) > Hauts-de-France",
    "FR-44 com 2017": "France > municipalities (2017) > Grand Est",
    "FR-52 com 2017": "France > municipalities (2017) > Pays de la Loire",
    "FR-53 com 2017": "France > municipalities (2017) > Bretagne",
    "FR-75 com 2017": "France > municipalities (2017) > Nouvelle-Aquitaine",
    "FR-76 com 2017": "France > municipalities (2017) > Occitanie",
    "FR-84 com 2017": "France > municipalities (2017) > Auvergne-Rhône-Alpes",
    "FR-93 com 2017": "France > municipalities (2017) > Provence-Alpes-Côte d’Azur",
    "FR-94 com 2017": "France > municipalities (2017) > Corse",
    "FRA10 com 2017": "France > municipalities (2017) > Guadeloupe",
    "FRA20 com 2017": "France > municipalities (2017) > Martinique",
    "FRA30 com 2017": "France > municipalities (2017) > Guyane",
    "FRA40 com 2017": "France > municipalities (2017) > La Réunion",
    "FRA50 com 2017": "France > municipalities (2017) > Mayotte",
    "FR-11 com 2021": "France > municipalities (2021) > Île-de-France",
    "FR-24 com 2021": "France > municipalities (2021) > Centre-Val de Loire",
    "FR-27 com 2021": "France > municipalities (2021) > Bourgogne-Franche-Comté",
    "FR-28 com 2021": "France > municipalities (2021) > Normandie",
    "FR-32 com 2021": "France > municipalities (2021) > Hauts-de-France",
    "FR-44 com 2021": "France > municipalities (2021) > Grand Est",
    "FR-52 com 2021": "France > municipalities (2021) > Pays de la Loire",
    "FR-53 com 2021": "France > municipalities (2021) > Bretagne",
    "FR-75 com 2021": "France > municipalities (2021) > Nouvelle-Aquitaine",
    "FR-76 com 2021": "France > municipalities (2021) > Occitanie",
    "FR-84 com 2021": "France > municipalities (2021) > Auvergne-Rhône-Alpes",
    "FR-93 com 2021": "France > municipalities (2021) > Provence-Alpes-Côte d’Azur",
    "FR-94 com 2021": "France > municipalities (2021) > Corse",
    "FRA10 com 2021": "France > municipalities (2021) > Guadeloupe",
    "FRA20 com 2021": "France > municipalities (2021) > Martinique",
    "FRA30 com 2021": "France > municipalities (2021) > Guyane",
    "FRA40 com 2021": "France > municipalities (2021) > La Réunion",
    "FRA50 com 2021": "France > municipalities (2021) > Mayotte",
    "FR-11 com 2022": "France > municipalities (2022) > Île-de-France",
    "FR-24 com 2022": "France > municipalities (2022) > Centre-Val de Loire",
    "FR-27 com 2022": "France > municipalities (2022) > Bourgogne-Franche-Comté",
    "FR-28 com 2022": "France > municipalities (2022) > Normandie",
    "FR-32 com 2022": "France > municipalities (2022) > Hauts-de-France",
    "FR-44 com 2022": "France > municipalities (2022) > Grand Est",
    "FR-52 com 2022": "France > municipalities (2022) > Pays de la Loire",
    "FR-53 com 2022": "France > municipalities (2022) > Bretagne",
    "FR-75 com 2022": "France > municipalities (2022) > Nouvelle-Aquitaine",
    "FR-76 com 2022": "France > municipalities (2022) > Occitanie",
    "FR-84 com 2022": "France > municipalities (2022) > Auvergne-Rhône-Alpes",
    "FR-93 com 2022": "France > municipalities (2022) > Provence-Alpes-Côte d’Azur",
    "FR-94 com 2022": "France > municipalities (2022) > Corse",
    "FRA10 com 2022": "France > municipalities (2022) > Guadeloupe",
    "FRA20 com 2022": "France > municipalities (2022) > Martinique",
    "FRA30 com 2022": "France > municipalities (2022) > Guyane",
    "FRA40 com 2022": "France > municipalities (2022) > La Réunion",
    "FRA50 com 2022": "France > municipalities (2022) > Mayotte",
    "maroc reg 2015": "Morocco > regions (2015)",
    "maroc prov 2015": "Morocco > provinces (2015)",
    "uk nuts1 2018": "United Kingdom > NUTS 1 (2018)",
    "uk nuts3 2018": "United Kingdom > NUTS 3 (2018)",
    "china prov 2018": "China > provinces (2018)",
    "algeria wil 2008": "Algeria > wilayas (2008)",
    "nc com 2017": "New Caledonia > municipalities (2017)",
    "MGP com 2018": "Greater Paris > municipalities (2018)",
    "MGP iris 2016": "Greater Paris > iris (2016)"
  },

  "examples": {
    "pop": "Population of States (2010-2015)",
    "idh": "Evolution of HDI (1990-2014)",
    "alim": "Undernourishment (2014-2016)",
    "unesco": "Unesco sites (2015)",
    "br_ufe-pop": "Population (2015)",
    "fr_dpt-pop": "Population (2013)",
    "fr_dpt-poverty": "Poverty (2013)",
    "fr_reg2015-pop": "Population (2013)",
    "fr_reg2015-poverty": "Poverty (2013)",
    "fr_reg2016-pop": "Population (2013)",
    "fr_reg2016-poverty": "Poverty (2013)",
    "de_district_inhabitants": "Population (31/12/2015)",
    "de_states_inhabitants_06_15": "Population (2006 - 2015)",
    "fr-pres-2012-t1": "Presidential election, 1st round (2012)",
    "fr-pres-2012-t2": "Presidential election, 2st round (2012)",
    "fr-pres-2017-t1": "Presidential election, 1st round (2017)",
    "fr-pres-2017-t2": "Presidential election, 2st round (2017)",
    "es_prov-pop": "Population (2000-2015)",
    "es_auto-pop": "Population (2000-2015)",
    "us_state-pop": "Population (2010-2015)",
    "eu_country-energie": "Share of renewable energy in gross final energy consumption (2005-2014)",
    "eu_country-ecommerce": "Internet purchases by individuals in the 12 months (2004-2016)",
    "eu_nuts2-travail": "Average hours worked per week (2015)",
    "eu_nuts2-agriculture": "Agricultural area by size of agricultural holdings (2013)",
    "eu_nuts3-pop": "Population density (2015)",
    "ca-prov-life-2015": "Life expectancy (2013-2015)",
    "ca-cd-pop-2017": "Population (2011-2017)",
    "ma-reg-pop-2014": "Population (2014)",
    "ma-prov-pop-2014": "Population (2014)",
    "uk-nuts1-pop-2017": "Population (2017)",
    "uk-nuts3-pop-2018": "Population (2014-2018)",
    "cn-prov-grp-2017": "Gross regional product (2009-2017)",
    "dz-wil-pop-2008": "Population (2008)",
    "nc-com-pop-2014": "Population (2014)",
    "nc-com-ref-2018": "Independence referendum (2018)",
    "MGP-com-2018-pop-2013": "Population (2013)",
    "MGP-iris-2016-pop-2013": "Population (2013)",
    "fr_dpt_pop1918": "Population (1872-1911)",
    "fr_dpt_pop1919": "Population (1921-1936)"
  },

  "importMap": {
    "title": "Import your own map",
    "importOrDrop": "import or drop your basemap",
    "success": "Files have been successfuly processed. Do you want to import ?",
    "selectId": "Select identifier",
    "selectIdDescription": "This identifier will be used to bind polygons (basemap) to the data. It's the \"joining\" operation.",
    "nonUniqueKey": "Warning : different objects will share the same id",
    "tooBig": "Basemap file seems very large! This could slow down Khartis",
    "askSimplify": "Do you want to simplify the polygon layout automatically?",
    "askKeepVars": {
      "title": "Keep the other variables ?",
      "true": "yes (to visualize them later)",
      "false": "no (only the ID will be kept)"
    },
    "withId": "with identifier",
    "error": {
      "title": "error",
      "noFile": "No valid file found",
      "unknow": "Unable to process selected files",
      "unknownProjection": "Unknow projection",
      "layersOnError": "Some layers have errors",
      "file_load": "Unable to load selected file",
      "dbf_num_records": "Different number of records in .shp and .dbf files",
      "dataEmpty": "No data has been found",
    }
  },

  "reproj": {
    "title": "Projection settings",
    "knowMore": "To know more about projections",
    "initalLabel": "Initial projection",
    "modifyLabel": "Change projection",
    "orWktProj4": "or set parameters (proj4 format)",
    "errorWktInvalid": "wkt is not valid",
    "selectInList": "select in the list"
  }

};
