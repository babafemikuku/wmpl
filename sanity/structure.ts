import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Our Work Page')
        .child(
          S.document()
            .schemaType('ourWorkPage')
            .documentId('ourWorkPage')
            .title('Our Work Page'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'ourWorkPage',
      ),
    ])
