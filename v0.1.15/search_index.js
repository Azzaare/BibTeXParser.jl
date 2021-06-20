var documenterSearchIndex = {"docs":
[{"location":"internal/","page":"Internal","title":"Internal","text":"","category":"page"},{"location":"internal/","page":"Internal","title":"Internal","text":"Modules = [BibInternal]","category":"page"},{"location":"internal/#BibInternal.entries","page":"Internal","title":"BibInternal.entries","text":"const entries = [\n    :article,\n    :book,\n    :booklet,\n    :inbook,\n    :incollection,\n    :inproceedings,\n    :manual,\n    :masterthesis,\n    :misc,\n    :phdthesis,\n    :proceedings,\n    :techreport,\n    :unpublished,\n]\n\nList of possible entries (currently based on bibtex). Keep it sorted for readability.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.fields","page":"Internal","title":"BibInternal.fields","text":"const fields = [\n    :address,\n    :annote,\n    :archivePrefix,\n    :author,\n    :booktitle,\n    :chapter,\n    :crossref,\n    :edition,\n    :editor,\n    :eprint,\n    :howpublished,\n    :institution,\n    :journal,\n    :key,\n    :month,\n    :note,\n    :number,\n    :organization,\n    :pages,\n    :primaryClass,\n    :publisher,\n    :school,\n    :series,\n    :title,\n    :type,\n    :volume,\n    :year\n]\n\nList of possible fields (currently based on bibtex). Keep it sorted for readability\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.maxfieldlength","page":"Internal","title":"BibInternal.maxfieldlength","text":"const maxfieldlength\n\nFor output formatting purpose, for instance, export to BibTeX format.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.rules","page":"Internal","title":"BibInternal.rules","text":"const rules = Dict([\n    \"article\"       => [\"author\", \"journal\", \"title\", \"year\"]\n    \"book\"          => [(\"author\", \"editor\"), \"publisher\", \"title\", \"year\"]\n    \"booklet\"       => [\"title\"]\n    \"eprint\"        => [\"author\", \"eprint\", \"title\", \"year\"]\n    \"inbook\"        => [(\"author\", \"editor\"), (\"chapter\", \"pages\"), \"publisher\", \"title\", \"year\"]\n    \"incollection\"  => [\"author\", \"booktitle\", \"publisher\", \"title\", \"year\"]\n    \"inproceedings\" => [\"author\", \"booktitle\", \"title\", \"year\"]\n    \"manual\"        => [\"title\"]\n    \"masterthesis\"  => [\"author\", \"school\", \"title\", \"year\"]\n    \"misc\"          => []\n    \"phdthesis\"     => [\"author\", \"school\", \"title\", \"year\"]\n    \"proceedings\"   => [\"title\", \"year\"]\n    \"techreport\"    => [\"author\", \"institution\", \"title\", \"year\"]\n    \"unpublished\"   => [\"author\", \"note\", \"title\"]\n])\n\nList of BibTeX rules bases on the entry type. A field value as a singleton represents a required field. A pair of values represents mutually exclusive required fields.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.AbstractEntry","page":"Internal","title":"BibInternal.AbstractEntry","text":"Abstract entry supertype.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Access","page":"Internal","title":"BibInternal.Access","text":"struct Access\n    doi::String\n    howpublished::String\n    url::String\nend\n\nStore the online access of an entry as a String. Handles the fields doi and url and the arXiV entries. For additional fields or entries, please fill an issue or make a pull request.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Access-Tuple{Any}","page":"Internal","title":"BibInternal.Access","text":"Access(fields::Fields)\n\nConstruct the online access information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Date","page":"Internal","title":"BibInternal.Date","text":"struct Date\n    day::String\n    month::String\n    year::String\nend\n\nStore the date information as day, month, and year.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Date-Tuple{Any}","page":"Internal","title":"BibInternal.Date","text":"Date(fields::Fields)\n\nConstruct the date information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Entry","page":"Internal","title":"BibInternal.Entry","text":"struct Entry <: AbstractEntry\n    access::Access\n    authors::Names\n    booktitle::String\n    date::Date\n    editors::Names\n    eprint::Eprint\n    id::String\n    in::In\n    fields::Dict{String,String}\n    title::String\n    type::String\nend\n\nGeneric Entry type. If some construction rules are required, it should be done beforehand. Check bibtex.jl as the example of rules implementation for BibTeX format.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Entry-Tuple{Any, Any}","page":"Internal","title":"BibInternal.Entry","text":"Entry(id::String, fields::Fields)\n\nConstruct an entry with a unique id and a list of Fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Eprint","page":"Internal","title":"BibInternal.Eprint","text":"struct Eprint\n    archive_prefix::String\n    eprint::String\n    primary_class::String\nend\n\nStore the information related to arXiv eprint format.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Eprint-Tuple{Any}","page":"Internal","title":"BibInternal.Eprint","text":"Eprint(fields::Fields)\n\nConstruct the eprint arXiv information based on the entry fields. Handle old and current arXiv format.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Fields","page":"Internal","title":"BibInternal.Fields","text":"Fields = Dict{String, String}. Stores the fields name => value of an entry.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.In","page":"Internal","title":"BibInternal.In","text":"struct In\n    address::String\n    chapter::String\n    edition::String\n    institution::String\n    journal::String\n    number::String\n    organization::String\n    pages::String\n    publisher::String\n    school::String\n    series::String\n    volume::String\nend\n\nStore all the information related to how an entry was published.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.In-Tuple{Any}","page":"Internal","title":"BibInternal.In","text":"In(fields::Fields)\n\nConstruct the information of how an entry was published based on its fields\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Name-Tuple{Any}","page":"Internal","title":"BibInternal.Name","text":"Name(str::String)\n\nDecompose without ambiguities a name as particle (optional) last, junior (optional), first middle (optional) based on BibTeX possible input. As for BibTeX, the decomposition of a name in the form of first last is also possible, but ambiguities can occur.\n\n\n\n\n\n","category":"method"},{"location":"internal/#Base.isless-Tuple{BibInternal.Date, BibInternal.Date}","page":"Internal","title":"Base.isless","text":"Base.isless(a::BibInternal.Date,b::BibInternal.Date)::Bool\n\nFunction to check for a < b on BibInternal.Date data types.\n\nThis function will throw an ArgumentError if the year can not parsed into Int. If it is not possible to parse month or day to Int those entries will be silently ignored for comparison. This function will not check if the date fields are given in a correct format all fields are parsed into and compared as Int (no checking if date format is correct or valid!).\n\ndanger: Note:\nThe silent ignoring of not parseable month or day fields will lead to misbehaviour if using comparators like == or !==!\n\n\n\n\n\n","category":"method"},{"location":"internal/#Base.isless-Tuple{BibInternal.Name, BibInternal.Name}","page":"Internal","title":"Base.isless","text":"Base.isless(a::BibInternal.Name,b::BibInternal.Name)::Bool\n\nFunction to check for a < b on BibInternal.Name data types.\n\nThis function will check the fields last, first and middle in this order of priority. The other fields are ignored for now. The field comparsion is done by string comparsion no advanced alphabetizing rules are used for now.\n\ndanger: Note:\nThe silent ignoring of the other fields might lead to misbehaviour if using comparators like == or !==!\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.arxive_url-Tuple{Any}","page":"Internal","title":"BibInternal.arxive_url","text":"arxive_url(fields::Fields)\n\nMake an arxiv url from an eprint entry. Work with both old and current arxiv BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.check_entry-Tuple{Any}","page":"Internal","title":"BibInternal.check_entry","text":"check_entry(fields::Fields)\n\nCheck the validity of the fields of a BibTeX entry.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.erase_spaces-Tuple{Any}","page":"Internal","title":"BibInternal.erase_spaces","text":"erase_spaces(str::String)\n\nErase extra spaces, i.e. r\"[  ]+\", from str and return a new string.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.get_delete!-Tuple{Any, Any}","page":"Internal","title":"BibInternal.get_delete!","text":"get_delete!(fields::Fields, key::String)\n\nGet the value of a field and delete it afterward.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.make_bibtex_entry-Tuple{Any, Any}","page":"Internal","title":"BibInternal.make_bibtex_entry","text":"make_bibtex_entry(id::String, fields::Fields)\n\nMake an entry if the entry follows the BibTeX guidelines. Throw an error otherwise.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.names-Tuple{Any}","page":"Internal","title":"BibInternal.names","text":"names(str::String)\n\nDecompose into parts a list of names in BibTeX compatible format. That is names sparated by and.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.space-Tuple{Any}","page":"Internal","title":"BibInternal.space","text":"space(field::Symbol)\n\nReturn the amount of spaces needed to export entries, for instance to BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"","category":"page"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"Modules = [BibParser.BibTeX]\nPages   = [\"bibtex.jl\"]","category":"page"},{"location":"bibtex/#BibParser.BibTeX.Accumulator","page":"BibTeX","title":"BibParser.BibTeX.Accumulator","text":"mutable struct Accumulator\n\nA structure to accumulate part of the input stream as a simple string. It differs from Position that store line and column information.\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.BibTeXError","page":"BibTeX","title":"BibParser.BibTeX.BibTeXError","text":"BibTeXError\n\nDescription of a BibTeXError, including the relevant position in the input string.\n\nArguments:\n\nkind::Symbol: the type of BibTeX error\ninput::String: the BibTeX string being parsed\nstart::Position: the row/col start position of the BibTeXError\nstop::Position: the row/col end position of the BibTeXError\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Content","page":"BibTeX","title":"BibParser.BibTeX.Content","text":"Content\n\nStore the different BibTeX elements once succesfully parsed.\n\nwarning: Note:\nFree text, comments entries and preambles entries are currently ignored.\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Content-Tuple{}","page":"BibTeX","title":"BibParser.BibTeX.Content","text":"Content()\n\nCreate an (almost) empty content constructor for a new Parser. Some usual BibTeX content is added:\n\nList of months abbreviations in English (added automatically by some BibTeX class)\n\nFeel free to contribute to more default content.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.Field","page":"BibTeX","title":"BibParser.BibTeX.Field","text":"Field\n\nA structure that can store BibTeX fields information.\n\nArguments:\n\nbraces::Int: counter to the number of opened braces in a field being parsed\nname::String: name of the field being parsed\nquotes::Bool: true if the field is delimited by quotes\nvalue::String: the value of the field\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Parser","page":"BibTeX","title":"BibParser.BibTeX.Parser","text":"Parser\n\nA structure allowing to parse a BibTeX formatted string one character at a time.\n\nArguments:\n\nacc::Accumulator: an accumulated string from last dump to content\ncontent::Content: the current content of a parser\nerrors::Vector{BibTeXError}: a collection of BibTeX errors\nfield::Field: temporary storage for an entry fields names\ninput::Vector{Char}: the BibTeX string\npos_start::Position: pointer to the raw/col start position\npos_end::Position: pointer to the raw/col end position\nstorage::Storage: temporary storage of the content of an entry being parsed\ntask::Symbol: describe which part of the BibTeX gramma is being parsed\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Position","page":"BibTeX","title":"BibParser.BibTeX.Position","text":"Position\n\nA structure pointing to a position in the input based on rows and columns.\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Position-Tuple{}","page":"BibTeX","title":"BibParser.BibTeX.Position","text":"Position()\n\nInitial position constructor\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.Storage","page":"BibTeX","title":"BibParser.BibTeX.Storage","text":"Storage\n\nStore the content of an entry being parsed.\n\nArguments:\n\ndelim::Union{Char, Nothing}: the character delimiting the entry\nfields::Vector{Field}: a collection of the entry's fields\nkey::String: the key of the entry\nkind::String: the kind/type of BibTeX entry\n\n\n\n\n\n","category":"type"},{"location":"bibtex/#BibParser.BibTeX.Storage-Tuple{}","page":"BibTeX","title":"BibParser.BibTeX.Storage","text":"Storage()\n\nEmpty storage constructor called when a new entry is being parsed.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.dump!","page":"BibTeX","title":"BibParser.BibTeX.dump!","text":"dump!(parser, char = ' ')\n\nDump the content of the parser Accumulator into the parser Content. Dispatch to the appropriate dump! method according to the state of the parser.\n\n\n\n\n\n","category":"function"},{"location":"bibtex/#BibParser.BibTeX.get_acc-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.get_acc","text":"get_acc(parser; from = 1, to = 0)\n\nRetrieve the Accumulator of the parser.\n\nArguments:\n\nparser: a Parser\nfrom: a positive offset from the start of the Accumulator, default to 1\nto:  a negative offset from the end of the Accumulator, default to 0\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.get_entries-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.get_entries","text":"get_entries(parser)\n\nRetrieve the entries succesfully parsed by parser.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.inc!-Tuple{Any, Any, Any}","page":"BibTeX","title":"BibParser.BibTeX.inc!","text":"inc!(parser, char, dumped)\n\nIncrement the start/end position and accumulator of the parser.\n\nArguments:\n\nparser: a BibTeX.Parser structure\nchar: the character being parsed\ndumped: boolean value describing if the Accumulator content is being dumped into the parser Content\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.inc_col!-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.inc_col!","text":"inc_col!(parser) = begin\n\nIncrement the column field of the pointer to the end position of the Parser.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.inc_row!-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.inc_row!","text":"inc_row!(parser)\n\nIncrement the row field of the pointer to the end position of the Parser.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.is_dumped-Tuple{Any, Any}","page":"BibTeX","title":"BibParser.BibTeX.is_dumped","text":"is_dumped(parser, char)\n\nCheck if an Accumulator needs to be dump!ed. Dispatch to the appropriate is_dumped method according to the state of the parser.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.make_entry-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.make_entry","text":"make_entry(storage)\n\nMake a BibInternal.Entry from a completed entry in a parser storage.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.parse!-Tuple{Any, Any}","page":"BibTeX","title":"BibParser.BibTeX.parse!","text":"parse!(parser, char)\n\nParse a single character of a BibTeX string. Modify the Parser accordingly.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.parse_file-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.parse_file","text":"parse_file(path)\n\nParse a BibTeX file located at path. Raise a detailed warning for each invalid entry.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.parse_string-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.parse_string","text":"parse_string(str)\n\nParse a BibTeX string of entries. Raise a detailed warning for each invalid entry.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.rev-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.rev","text":"rev(char)\n\nReturn the closing character )/} matching either ( or {.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.set_delim!-Tuple{Any, Any}","page":"BibTeX","title":"BibParser.BibTeX.set_delim!","text":"set_delim!(parser, char)\n\nSet the delimiter for this section of the entry to parenthesis or braces.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.set_entry_kind!-Tuple{Any, Any}","page":"BibTeX","title":"BibParser.BibTeX.set_entry_kind!","text":"set_entry_kind!(parser, kind) = begin\n\nSet the kind of the entry being parsed in the parser's storage.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibParser.BibTeX.warn-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.warn","text":"warn(error)\n\nDispatch a BibTeX error as a Julia warning based on the type of error.\n\n\n\n\n\n","category":"method"},{"location":"","page":"BibParser","title":"BibParser","text":"","category":"page"},{"location":"","page":"BibParser","title":"BibParser","text":"Modules = [BibParser]\nPages   = [\"BibParser.jl\"]","category":"page"},{"location":"#BibParser.parse_entry-Tuple{Any}","page":"BibParser","title":"BibParser.parse_entry","text":"parse_entry(entry::String; parser::Symbol = :BibTeX)\n\nParse a string entry. Default to BibTeX format. No other options available yet (CSL-JSON coming soon).\n\n\n\n\n\n","category":"method"},{"location":"#BibParser.parse_file-Tuple{Any}","page":"BibParser","title":"BibParser.parse_file","text":"parse_file(path::String; parser::Symbol = :BibTeX)\n\nParse a bibliography file. Default to BibTeX format. No other options available yet (CSL-JSON coming soon).\n\n\n\n\n\n","category":"method"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"","category":"page"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"Coming soon!","category":"page"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"Modules = [BibParser.CSL]\nPages   = [\"csl.jl\"]","category":"page"}]
}
