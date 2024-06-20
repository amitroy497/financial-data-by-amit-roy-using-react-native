import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BalanceSheetForm } from '../../components';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';

export const ViewBalanceSheet = () => {
	const { balanceSheet: balanceSheetData } = useSelector(
		(s: any) => s.balanceSheet
	);

	return (
		<ScrollView style={styles.rootContainer}>
			{balanceSheetData?.map((sheet: any, index: number) => (
				<View style={styles.container} key={index}>
					<View>
						<View style={[styles.flexContainer, styles.assetMainContainer]}>
							<Text style={[styles.text, styles.mainContainerText]}>
								{sheet?.assets?.mainTitle}
							</Text>
							<Text style={[styles.text, styles.mainContainerText]}>
								₹{sheet?.assets?.mainValue}
							</Text>
						</View>
						{sheet?.assets?.mainDetails.map(
							(mainDetailsItem: any, j: number) => (
								<View style={styles.mainDetailsContainer} key={j}>
									<View style={[styles.flexContainer, styles.headerContainer]}>
										<Text style={[styles.text, styles.assetsHeaderText]}>
											{mainDetailsItem?.headerTitle}
										</Text>
										<Text style={[styles.text, styles.assetsHeaderText]}>
											₹{mainDetailsItem?.headerValue}
										</Text>
									</View>
									{mainDetailsItem?.headerDetails?.map(
										(headerDetailsItem: any, k: number) => (
											<View style={styles.headerDetailsContainer} key={k}>
												<View
													style={[
														styles.flexContainer,
														styles.subHeaderContainer,
													]}
												>
													<Text style={[styles.text, styles.subHeaderText]}>
														{headerDetailsItem?.subHeaderTitle}
													</Text>
													<Text style={[styles.text, styles.subHeaderText]}>
														₹{headerDetailsItem?.subHeaderValue}
													</Text>
												</View>
												{headerDetailsItem?.subDetails?.map(
													(subDetailsItem: any, l: number) => (
														<View style={styles.flexContainer} key={l}>
															<Text style={[styles.text]}>
																{subDetailsItem?.label}
															</Text>
															<Text>₹{subDetailsItem?.value}</Text>
														</View>
													)
												)}
											</View>
										)
									)}
								</View>
							)
						)}
					</View>
					<View>
						<View
							style={[styles.flexContainer, styles.liabilitiesMainContainer]}
						>
							<Text style={[styles.text, styles.mainContainerText]}>
								{sheet?.liabilities?.mainTitle}
							</Text>
							<Text style={[styles.text, styles.mainContainerText]}>
								₹{sheet?.liabilities?.mainValue}
							</Text>
						</View>
						{sheet?.liabilities?.mainDetails.map(
							(mainDetailsItem: any, j: number) => (
								<View style={styles.mainDetailsContainer} key={j}>
									<View style={[styles.flexContainer, styles.headerContainer]}>
										<Text style={[styles.text, styles.liabilitiesHeaderText]}>
											{mainDetailsItem?.headerTitle}
										</Text>
										<Text style={[styles.text, styles.liabilitiesHeaderText]}>
											₹{mainDetailsItem?.headerValue}
										</Text>
									</View>
									{mainDetailsItem?.headerDetails?.map(
										(headerDetailsItem: any, k: number) => (
											<View style={styles.headerDetailsContainer} key={k}>
												<View
													style={[
														styles.flexContainer,
														styles.subHeaderContainer,
													]}
												>
													<Text style={[styles.text, styles.subHeaderText]}>
														{headerDetailsItem?.subHeaderTitle}
													</Text>
													<Text style={[styles.text, styles.subHeaderText]}>
														₹{headerDetailsItem?.subHeaderValue}
													</Text>
												</View>
												{headerDetailsItem?.subDetails?.map(
													(subDetailsItem: any, l: number) => (
														<View style={styles.flexContainer} key={l}>
															<Text style={[styles.text]}>
																{subDetailsItem?.label}
															</Text>
															<Text>₹{subDetailsItem?.value}</Text>
														</View>
													)
												)}
											</View>
										)
									)}
								</View>
							)
						)}
					</View>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		padding: 2,
		margin: 12,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	container: {
		padding: 2,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	flexContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		fontWeight: 'bold',
		flexShrink: 1,
	},
	assetMainContainer: {
		backgroundColor: Colors.green700,
		padding: 4,
	},
	liabilitiesMainContainer: {
		backgroundColor: Colors.red400,
		padding: 4,
	},
	mainContainerText: {
		color: Colors.white,
	},
	mainDetailsContainer: {
		padding: 4,
	},
	headerContainer: {
		marginTop: 15,
		marginBottom: 12,
	},
	assetsHeaderText: {
		color: Colors.green700,
	},
	liabilitiesHeaderText: {
		color: Colors.red400,
	},
	headerDetailsContainer: {
		marginVertical: 10,
	},
	subHeaderContainer: {
		marginBottom: 5,
	},
	subHeaderText: {
		color: '#6873e3',
	},
});
