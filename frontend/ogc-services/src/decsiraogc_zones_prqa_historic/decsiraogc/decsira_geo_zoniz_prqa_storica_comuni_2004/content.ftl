<table class="featureInfo">
  <caption class="featureInfo">Zone qualita' dell'aria su base comunale - DGR N. 19-12878 DEL 28/06/2004</caption>
  <#list features as feature>
    <tr>
      <th>Istat comune</th>
	  <th>Comune</th>
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
      <td>${feature.istat.value}</td>
	  <td>${feature.toponimo.value}</td>
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
