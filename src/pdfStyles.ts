import { StyleSheet } from "@react-pdf/renderer";

const Colors = {
  PDFPrimary: "#333",
  PDFSecondary: "#F8F8F8",
  PDFWhite: "#FFF",
};

export const PDFStyles = StyleSheet.create({
  page: { fontFamily: "Montserrat", fontSize: "10px" },
  mainView: { display: "flex", flexDirection: "row" },
  leftView: { width: "34%", display: "flex", flexDirection: "column" },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "LibreBaskerville",
    marginBottom: "15px",
    textTransform: "uppercase",
  },
  profileSection: {
    backgroundColor: Colors.PDFPrimary,
    color: Colors.PDFSecondary,
    padding: "20px",
    flexGrow: 1,
  },
  profileName: { marginBottom: "20px", fontSize: "18px" },
  bioText: {
    marginBottom: "25px",
    fontSize: "14px",
    fontFamily: "LibreBaskervilleItalic",
  },
  experienceSection: {
    padding: "20px",
    width: "64%",
    color: Colors.PDFPrimary,
    backgroundColor: Colors.PDFWhite,
  },
  positionName: { fontSize: "16px", marginBottom: "8px" },
  companyName: {
    fontSize: "12px",
    marginBottom: "6px",
    fontFamily: "Montserrat-Bold",
  },
  singleExperience: { marginBottom: "25px" },
  experienceDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  singleDescription: {
    display: "flex",
    flexDirection: "row",
    marginTop: "4px",
  },
  educationAndSkillSection: {
    backgroundColor: Colors.PDFSecondary,
    color: Colors.PDFPrimary,
    padding: "20px",
    height: "100%",
  },
  schoolName: { marginBottom: "6px", fontFamily: "Montserrat-Bold" },
  skillTitle: { marginBottom: "8px", fontFamily: "Montserrat-Bold" },
  textWithIcon: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  pdfIcon: {
    alignSelf: "center",
    height: "10px",
    marginRight: "5px",
  },
  linkStyle: {
    color: Colors.PDFWhite,
    textDecoration: "none",
  },
});
