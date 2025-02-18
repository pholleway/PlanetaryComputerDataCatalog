# About the Microsoft Planetary Computer

The Microsoft Planetary Computer is a platform that lets users leverage the power of the cloud to accelerate environmental sustainability and Earth science.

The Planetary Computer consists of four major components:

- The [Data Catalog](https://planetarycomputer.microsoft.com/catalog), which includes petabytes of data about Earth systems, hosted on Azure and made available to users for free.
- [APIs](../concepts/stac.md) that allow users to search for the data they need across space and time.
- The [Hub](./environment.md), a fully managed computing environment that allows scientists to process massive geospatial datasets.
- [Applications](https://planetarycomputer.microsoft.com/applications), built by our network of partners, that put the Planetary Computer platform to work for environmental sustainability.

```{note}
Check current Planetary Computer health status and view past incidents on the [Service Status](https://planetarycomputer-status.microsoft.com) page.
```

## Built on Open

The Planetary Computer uses open source tools and supports open standards. In fact, the foundation of the Planetary Computer is the incredible ecosystem of tools being developed in the open by our partners and the much broader open source community. For example, our Hub builds on the work done by the [Pangeo](http://pangeo.io/) community to put the tools of data science to work for the Earth science community, and our API builds on the work done by the [STAC](https://stacspec.org/) community to streamline and standardize the cataloging and discovery of geospatial data.

Many of the Planetary Computer components are also open-source. These provide guidance on how to tie together open-source libraries on Azure for geospatial and environmental data analysis.

| GitHub repository                                                                                     | Purpose                                                                                                                                                                                |
|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Microsoft/planetary-computer-apis](https://github.com/Microsoft/planetary-computer-apis)             | Deploys the [STAC](https://planetarycomputer.microsoft.com/docs/reference/stac/) and [data](https://planetarycomputer.microsoft.com/docs/reference/data/) APIs                         |
| [Microsoft/planetary-computer-hub](https://github.com/Microsoft/planetary-computer-hub)               | Deploys the [Planetary Computer Hub](https://planetarycomputer.microsoft.com/docs/overview/environment/)                                                                               |
| [Microsoft/planetary-computer-containers](https://github.com/Microsoft/planetary-computer-containers) | Builds the container images with the [software environment](https://planetarycomputer.microsoft.com/docs/overview/environment/#understanding-the-software-environment) used on the Hub |
| [Microsoft/PlanetaryComputerExamples](https://github.com/microsoft/planetarycomputerexamples)         | Contains notebooks with examples for each dataset, quickstarts, and tutorials for using the Planetary Computer                                                                         |

## About the Preview

While the Planetary Computer data and APIs are publicly accessible, certain features of the Planetary Computer are in Preview and require access be granted. Use the [request access form](https://planetarycomputer.microsoft.com/account/request) to express your interest in becoming an early user.

In the meantime, the core components of the Planetary Computer are usable without an account:

- The [STAC API](../reference/stac) is public and can be accessed anonymously.
- Most data can be downloaded anonymously, but will be throttled. See [Reading data from the STAC API](../quickstarts/reading-stac.ipynb) for an introduction and [Using Tokens for Data Access](../concepts/sas) for more background on accessing data. Some datasets require a Planetary Computer API subscription key.

We're just getting started. Check back for updated documentation and new features!

```{tip} To report issues, ask questions, or engage in community discussions please visit our [GitHub repository](https://github.com/microsoft/PlanetaryComputer).
```

## Next steps

- [Browse the data available in the Planetary Computer through the Data Catalog](https://planetarycomputer.microsoft.com/catalog)
- [Learn how to search for Planetary Computer data using the STAC API](../quickstarts/reading-stac.ipynb)
- Check out the example notebooks for our datasets, for example:
  - [Landsat Collection 2 Level-2](https://planetarycomputer.microsoft.com/dataset/landsat-c2-l2#Example-Notebook)
  - [Sentinel-2  L2A](https://planetarycomputer.microsoft.com/dataset/sentinel-2-l2a#Example-Notebook)
  - [NAIP](https://planetarycomputer.microsoft.com/dataset/naip#Example-Notebook)
  - [ASTER L1T](https://planetarycomputer.microsoft.com/dataset/aster-l1t#Example-Notebook)
- [Request a Planetary Computer account](https://planetarycomputer.microsoft.com/account/request)

## Beyond the Planetary Computer

The Planetary Computer is just one component of Microsoft's commitment to environmental sustainability.

- Learn more about Microsoft's [environmental sustainability program](https://www.microsoft.com/en-us/corporate-responsibility/sustainability).
- Learn more about the work done by AI for Earth grantees at the [AI for Earth grantee gallery](https://aka.ms/ai4egrantees).
- Microsoft's [AI for Earth program](https://aka.ms/aiforearth) also provides open source technical resources for conservation work; check out our [machine learning APIs](https://aka.ms/ai4eapis), and read about our tools for [accelerating biodiversity surveys with AI](https://aka.ms/biodiversitysurveys) and [AI-accelerated land cover analysis](https://aka.ms/landcovermapping).

