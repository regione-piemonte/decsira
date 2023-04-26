<table class="featureInfo">
  <caption class="featureInfo">Aree Idrografiche PTA 2007</caption>
  <#list features as feature>
    <tr>
      <th>Anno riferimento</th> 
	  <th>Denominazione Area</th> 
	  <th>Area [kmq]</th>
    </tr>
    <tr>
      <td>${feature.anno_riferimento.value}</td> 
	  <td>${feature.nome.value}</td>  
	  <td>${feature.area_km2.value}</td>
    </tr>
  </#list>
</table>