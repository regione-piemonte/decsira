<table class="featureInfo">
  <caption class="featureInfo">Zone qualita' dell'aria - DGR N. 41-855 DEL 29/12/2014</caption>
  <#list features as feature>
    <tr>
      <th>Codice zona</th>
	  <th>Denominazione zona</th>
	  <th>Popolazione</th>
	  <th>Anno popolazione</th>
	  <th>Area (Km2)</th>
	  <th>Densita' (ab/Km2)</th>
	  <th>Tipo zona</th>
	  <th>Regione</th>
	  <th>Inquinanti target</th>
	  <th>Determina approvazione</th>
    </tr>
    <tr>
      <td>${feature.zone_code.value}</td>
	  <td>${feature.label_zone.value}</td>
	  <td>${feature.zone_population.value}</td>
	  <td>${feature.zone_population_year.value}</td>
	  <td>${feature.zone_area_km2.value}</td>
	  <td>${feature.zone_density.value}</td>
	  <td>${feature.zone_type_label.value}</td>
	  <td>${feature.region_label.value}</td>
	  <td>${feature.poll_targ.value}</td>
	  <td>${feature.determina_regionale.value}</td>
    </tr>
  </#list>
</table>