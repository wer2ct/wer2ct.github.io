---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
description: 
---

### <strong> Currently </strong>

<hr class="mt-3">

As I wrap up my time at UVA, I am focused on finishing some analysis efforts for LDMX adjacent to the searches detailed [here](https://arxiv.org/pdf/2604.14359). Mostly, that involves thinking carefully about the differences between various machine learning (ML) approaches to event selection cuts, and waiting for UVA GPU resources to free up. A side project is compiling some of those general ML results into an experiment-independent technote. I am planning on taking a few months off research before I ramp back up at MIT this fall.   

### <strong> Previously </strong>

<hr class="mt-3">

Soon!

### <strong> Presentations </strong>

<hr class="mt-3">

Some LDMX presentations contain work-in-progress. Plots of this sort are generally marked, and presentations are collaboration-approved. All that said, please reach out before using or reproducing any material to get full context for any plots or results!

{% assign sorted_talks = site.presentations | sort: "date" | reverse %}

<ul>
{% for talk in sorted_talks %}
  <li>
   <em>"{{ talk.title }}"</em> @ {{ talk.venue }}
    {% if talk.slides or talk.poster %}
      ({% if talk.slides %}
       <a href="{{ talk.slides | relative_url }}">slides</a>
      {% endif %}
      {% if talk.slides and talk.poster %}
        |
      {% endif %}
      {% if talk.poster %}
       <a href="{{ talk.poster | relative_url }}">poster</a>
      {% endif %})
    {% else %}
      (deliverables not included)
    {% endif %}
  </li>
{% endfor %}
</ul>
