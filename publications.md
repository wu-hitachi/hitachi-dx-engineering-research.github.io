---
layout: filter
---
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">     -->
  
# Publication List


<div id="publications">
    <ul>
    {% for item in site.data.publications %}
    <li>
        {{item.authors}},
        ({{item.year}}).
        <b> 
            {% if item.link %}
                <a href="{{ item.link }}">
                {{ item.title }}
                </a>,
            {% else %}
                {{ item.title }},
            {% endif %}
        </b>
        {{item.publisher}}
        {% for award in item.awards %}
          <b>{{award}}</b>
        {% endfor %}
        <br />
        {% for tag in item.tags %}
            <div class="chip btn"> {{tag}} </div>
        {% endfor %}
        </li>
    {% endfor %}
    </ul>
</div>


<script>
    function filterByTags() {
        var selected, ul, li, i;
        selected = Array.from(document.querySelector('.tag-filter').querySelectorAll('.btn.active')).map(el => el.innerText.trim());

        ul = document.getElementById("publications");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            tags = Array.from(li[i].querySelectorAll(".btn")).map(el => el.innerText.trim());
            let needShow = true;
            if (selected.length > 0) {
                needShow = selected.every(val => tags.includes(val));
            }
            
            if (needShow) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
</script> 

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>    
