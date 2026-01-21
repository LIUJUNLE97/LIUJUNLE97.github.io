---
permalink: /
title: "Junle Liu"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

ABOUT ME
======
Hi, there. Dr.Junle LIU earned his Bachelor's degree from Harbin Institute of Technology, Shenzhen, and his Ph.D. degree from Hong Kong University of Science and Technology (HKUST). Dr Liu joined KTH as a postdoc research fellow supervised by [Ricardo Vinuesa](https://aero.engin.umich.edu/people/ricardo-vinuesa/) and [Stefan Wallin](https://www.kth.se/profile/swallin?l=en) from May 2025, and his research topics focus on DRL and wall modelling.

In his past research journey, he has been concentrating on AI-aided aerodynamics and data-driven techniques in experimental fluid mechanics and numerical simulation. As of now, Dr.Liu has published papers covering AI-enhanced fluid mechanics, experimental fluid mechanics, and reduced-order modelling techniques in aerodynamics.

Some recent research interests of Dr.Liu:

- Developing new wall boundary conditions for turbulent channel;
- RL for flow control and UAV optimization (low-attitude drone);
- AI4Fluids: prediction and reconstruction.

Dr.Liu welcomes any kind of academic and industrial collaborations. If you are interested in Dr.Liu's research field, please feel free to drop an email at junle@kth.se or send an instant message. 


Latest News
======
[2026 Jan] New collaboration paper in _Energy_ out: [Wind energy potential of a novel green building design: Three connected high-rise buildings with Y-plan layout](https://doi.org/10.1016/j.energy.2026.140124)
- Topic: Estimate the wind energy potential in the urban city;
- Method: Numerical-experiments cross-validation;
- Findings: Installing wind turbines in urban city buildings can harvest a great amount of wind energy.
[2025 Dec] New paper in _Physics of Fluids_ out: [Spatiotemporal wall pressure forecast of a rectangular cylinder with physics-aware DeepU-Fourier neural network](https://doi.org/10.1063/5.0298947)
- Topic: Estimate the physics-aware AI model in spatiotemporal wall pressure prediction;
- Method: Wind tunnel testing, physics-aware AI development, statistical and physical interpretations;
- Findings: Embedding physics in AI greatly enhances performance and improves extrapolation capability.
[2025 Dec] New Conference paper in NeurIPS UrbanAI workshop accepted: [PresCast: Physics-Constrained Fourier Kolmogorov-Arnold Networks for Bluff Bodies Spatiotemporal Wall Pressure Forecast](https://openreview.net/forum?id=ibWIrx69yc)
- Topic: Estimate the wind-induced pressure information on building facade safety;
- Method: Physics-aware AI, KAN, wind tunnel testing;
- Findings: AI can short-term forecast on wind-induced pressure to reduce disasters/risks, enhancing building safety.


Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](https://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one Markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a Markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each Markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual Markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the Markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and Markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a Markdown file for a talk
![Editing a Markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
