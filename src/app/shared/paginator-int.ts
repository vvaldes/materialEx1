//import {MatPaginatorIntl} from '@angular/material/legacy-paginator/paginator-intl';
import {MatPaginatorIntl as MatPaginatorIntl} from '@angular/material/paginator';

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 van ${length}`; }
  
  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} van ${length}`;
}


export function getDutchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  
  paginatorIntl.firstPageLabel = 'Primera página';
  paginatorIntl.lastPageLabel = 'Última página';
  paginatorIntl.itemsPerPageLabel = 'Líneas por pagina:';
  paginatorIntl.nextPageLabel = 'Siguiente pagina';
  paginatorIntl.previousPageLabel = 'Pagina previa';
  paginatorIntl.getRangeLabel = dutchRangeLabel;
  
  return paginatorIntl;
}